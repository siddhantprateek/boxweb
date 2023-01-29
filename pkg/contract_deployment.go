package pkg

import (
	"fmt"

	conn "github.com/siddhantprateek/boxweb/internal"
)

func ContractDeployment(accountAddress string) {
	client := conn.ConnectNetwork()

	// create auth and transaction package for deploying smart contract
	auth := getAccountAuth(client, accountAddress)

	// deploying smart contract
	deployedContractAddress, tx, instance, err := api.DeployApi(auth, client)
	if err != nil {
		panic(err)
	}

	// Print contract address
	fmt.Println(deployedContractAddress.Hex())
}
