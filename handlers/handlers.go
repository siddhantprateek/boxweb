package handler

import (
	"encoding/json"
	"math/big"
	"net/http"
	"strconv"

	"github.com/gofiber/fiber/v2"
	connect "github.com/siddhantprateek/boxweb/internal"
	authpkg "github.com/siddhantprateek/boxweb/pkg"
)

func DepositAmount(c *fiber.Ctx) error {
	amount := c.Params("amount")
	amt, _ := strconv.Atoi(amount)

	// get address of account by which amount to be deposit
	var v map[string]interface{}
	err := json.NewDecoder(c.Request().Body).Decode(&v)
	if err != nil {
		panic(err)
	}

	client := connect.ConnectNetwork()
	auth := authpkg.GetAccountAuth(client, v["accountPublicAddress"].(string))

	reply, err := conn.Deposit(auth, big.NewInt(int64(amt)))
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, reply)
}
