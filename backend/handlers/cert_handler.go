package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/linamandresy/tenalink-backend/bahamut"
)

func HandleIssueCertificate(w http.ResponseWriter, r *http.Request) {
	var certReq bahamut.CertificateRequest
	if err := json.NewDecoder(r.Body).Decode(&certReq); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	client := bahamut.NewClient()
	resp, err := client.IssueCertificate(certReq)
	if err != nil || resp.StatusCode != http.StatusOK {
		http.Error(w, "Failed to issue certificate", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "Certificate issued successfully"})
}
