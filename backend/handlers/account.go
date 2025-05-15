package handlers

import (
	"net/http"

	"github.com/linamandresy/tenalink-backend/db"
	"github.com/linamandresy/tenalink-backend/stellar"
	"github.com/linamandresy/tenalink-backend/utils"
)

type Account struct {
	FirstName            string `bson:"firstName"`
	LastName             string `bson:"lastName"`
	Email                string `bson:"email"`
	Password             string `bson:"password"`
	Institution          string `bson:"institution"`
	DateOfBirth          string `bson:"dateOfBirth"`
	CountryOfBirth       string `bson:"countryOfBirth"`
	CountryOfInstitution string `bson:"countryOfInstitution"`
	AccountType          string `bson:"accountType"`
	Skills               string `bson:"skills"`
	StellarAccountID     string `bson:"StellarAccountID"`
	StellarSecretKey     string `bson:"StellarSecretKey"`
}

func CreateAccountHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	account, err := stellar.CreateStellarAccount()
	if err != nil {
		utils.Error(w, http.StatusInternalServerError, err.Error())
		return
	}

	accountData := Account{
		FirstName:            r.FormValue("firstName"),
		LastName:             r.FormValue("lastName"),
		Email:                r.FormValue("email"),
		Password:             r.FormValue("password"),
		Institution:          r.FormValue("institution"),
		DateOfBirth:          r.FormValue("dateOfBirth"),
		CountryOfBirth:       r.FormValue("countryOfBirth"),
		CountryOfInstitution: r.FormValue("countryOfInstitution"),
		AccountType:          r.FormValue("accountType"),
		Skills:               r.FormValue("skills"),
		StellarAccountID:     account.PublicKey,
		StellarSecretKey:     account.SecretKey,
	}

	clientInstance, err := db.GetMongoClient()
	if err != nil {
		utils.Error(w, http.StatusInternalServerError, err.Error())
		return
	}
	collection := clientInstance.Database("tenalink").Collection("accounts")
	_, err = collection.InsertOne(r.Context(), accountData)
	if err != nil {
		utils.Error(w, http.StatusInternalServerError, err.Error())
		return
	}

	utils.JSON(w, http.StatusOK, "Account created successfully")
}
