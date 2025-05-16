package bahamut

import (
	"bytes"
	"encoding/json"
	"net/http"
)

type CertificateRequest struct {
	UserID      string `json:"user_id"`
	CertType    string `json:"cert_type"`
	Institution string `json:"institution"`
}

func (c *BahamutClient) IssueCertificate(cert CertificateRequest) (*http.Response, error) {
	body, _ := json.Marshal(cert)
	req, err := http.NewRequest("POST", c.BaseURL+"/certificates", bytes.NewBuffer(body))
	if err != nil {
		return nil, err
	}
	return c.doRequest(req)
}

type Certificate struct {
	ID          string `json:"id"`
	UserID      string `json:"user_id"`
	CertType    string `json:"cert_type"`
	Institution string `json:"institution"`
	IssuedAt    string `json:"issued_at"`
}
