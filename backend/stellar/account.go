package stellar

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/stellar/go/keypair"
)

type StellarAccount struct {
	PublicKey string `json:"public_key"`
	SecretKey string `json:"secret_key"`
}

func CreateStellarAccount() (*StellarAccount, error) {
	kp, err := keypair.Random()
	if err != nil {
		return nil, fmt.Errorf("could not generate keypair: %w", err)
	}

	// Fund account on Stellar testnet using Friendbot
	resp, err := http.Get("https://friendbot.stellar.org/?addr=" + kp.Address())
	if err != nil {
		return nil, fmt.Errorf("error funding account: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		body, _ := ioutil.ReadAll(resp.Body)
		return nil, fmt.Errorf("friendbot error: %s", string(body))
	}

	return &StellarAccount{
		PublicKey: kp.Address(),
		SecretKey: kp.Seed(),
	}, nil
}
