package db

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	clientInstance    *mongo.Client
	clientInstanceErr error
	mongoOnce         sync.Once
	// Change if needed
)

// GetMongoClient returns a singleton MongoDB client instance
func GetMongoClient() (*mongo.Client, error) {
	mongoURI := os.Getenv("MONGODB_URI")
	mongoOnce.Do(func() {
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()
		fmt.Printf("Mongo URI: %s\n", mongoURI)
		clientOptions := options.Client().ApplyURI(mongoURI)
		client, err := mongo.Connect(ctx, clientOptions)
		if err != nil {
			clientInstanceErr = err
			return
		}
		// Ping to verify connection
		if err = client.Ping(ctx, nil); err != nil {
			clientInstanceErr = err
			return
		}
		clientInstance = client
		log.Println("Connected to MongoDB!")
	})
	return clientInstance, clientInstanceErr
}
