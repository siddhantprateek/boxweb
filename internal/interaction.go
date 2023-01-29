package internal

import (
	"context"
	"fmt"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
)

func ConnectNetwork() *ethclient.Client {
	// Ganache RPC Server: HTTP://127.0.0.1:7545
	// you can provide infura mainnet id
	conn, err := ethclient.Dial("HTTP://127.0.0.1:7545")
	if err != nil {
		fmt.Println("Unable to connect Ethereum client")
	}

	ctx := context.Background()
	tx, pending, _ := conn.TransactionByHash(ctx, common.HexToHash(""))
	if !pending {
		fmt.Println(tx)
	}

	return conn
}
