package handler

import (
	"encoding/json"

	"github.com/gofiber/fiber/v2"
)

func AppHandler() {

	router := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})

	router.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Server is Healthy...")
	})

	router.Listen(":8000")
}
