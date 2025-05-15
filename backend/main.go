package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/linamandresy/tenalink-backend/config"
	"github.com/linamandresy/tenalink-backend/handlers"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to the Stellar API!")
}

func main() {
	// Load environment variables
	// config.LoadEnv()

	config.LoadEnv()

	// publicKey := config.GetEnv("STELLAR_PUBLIC_KEY")
	// secretKey := config.GetEnv("STELLAR_SECRET_KEY")

	// fmt.Println("Stellar Public Key:", publicKey)
	// fmt.Println("Stellar Secret Key:", secretKey)

	// fmt.Println("Server is running on http://localhost:8080")
	// log.Fatal(http.ListenAndServe(":8080", nil))

	http.HandleFunc("/", handler)
	http.HandleFunc("/api/signin", handlers.CreateAccountHandler)
	fmt.Println("Server is running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))

	// dest := publicKey
	// err := stellar.SendTestPayment(dest, "10")
	// if err != nil {
	// 	log.Fatalf("Error sending payment: %v", err)
	// } else {
	// 	log.Println("Payment sent successfully!")
	// }
}
