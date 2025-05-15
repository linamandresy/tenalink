package stellar

import (
	"fmt"
	"log"
	"os"

	"github.com/stellar/go/clients/horizonclient"
	"github.com/stellar/go/keypair"
	"github.com/stellar/go/network"
	"github.com/stellar/go/txnbuild"
)

var (
	client      = horizonclient.DefaultTestNetClient
	networkPass = network.TestNetworkPassphrase
)

func SendTestPayment(destination string, amount string) error {
	sourceSecret := os.Getenv("STELLAR_SECRET_KEY")
	sourceKP, err := keypair.ParseFull(sourceSecret)
	if err != nil {
		return fmt.Errorf("invalid source key: %w", err)
	}

	// Load source account
	accountRequest := horizonclient.AccountRequest{AccountID: sourceKP.Address()}

	sourceAccount, err := client.AccountDetail(accountRequest)
	if err != nil {
		return fmt.Errorf("could not fetch source account: %w", err)
	}

	// Build payment operation
	op := txnbuild.Payment{
		Destination: destination,
		Amount:      amount,
		Asset:       txnbuild.NativeAsset{},
	}

	// Build transaction
	txParams := txnbuild.TransactionParams{
		SourceAccount:        &sourceAccount,
		Operations:           []txnbuild.Operation{&op},
		BaseFee:              txnbuild.MinBaseFee,
		IncrementSequenceNum: true,
		Preconditions: txnbuild.Preconditions{
			TimeBounds: txnbuild.NewTimeout(300),
		},
	}

	tx, err := txnbuild.NewTransaction(txParams)
	if err != nil {
		return fmt.Errorf("could not build tx: %w", err)
	}

	tx, err = tx.Sign(networkPass, sourceKP)
	if err != nil {
		return fmt.Errorf("could not sign tx: %w", err)
	}

	resp, err := client.SubmitTransaction(tx)
	if err != nil {
		return fmt.Errorf("submit failed: %w", err)
	}

	log.Printf("Transaction successful! Hash: %s", resp.Hash)
	return nil
}
