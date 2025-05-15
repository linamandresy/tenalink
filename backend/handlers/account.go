package handlers

import (
	"github.com/linamandresy/tenalink-backend/stellar"
	"github.com/linamandresy/tenalink-backend/utils"
	"net/http"
)

func CreateAccountHandler(w http.ResponseWriter, r *http.Request) {
	account, err := stellar.CreateStellarAccount()
	if err != nil {
		utils.Error(w, http.StatusInternalServerError, err.Error())
		return
	}
	utils.JSON(w, http.StatusOK, account)
}
