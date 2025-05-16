package bahamut

import (
	"fmt"
	"net/http"
	"os"
)

type BahamutClient struct {
	ApiKey  string
	BaseURL string
}

func NewClient() *BahamutClient {
	return &BahamutClient{
		ApiKey:  os.Getenv("BAHAMUT_API_KEY"),
		BaseURL: "https://api.bahamut.io", // replace with actual Bahamut API URL
	}
}

func (c *BahamutClient) doRequest(req *http.Request) (*http.Response, error) {
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", c.ApiKey))
	req.Header.Set("Content-Type", "application/json")
	client := &http.Client{}
	return client.Do(req)
}
