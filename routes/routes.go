package routes

import (
	"encoding/json"

	"github.com/gofiber/fiber/v2"
	database "github.com/siddhantprateek/boxweb/database"
)

func AppRoute() {
	router := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})

	// database connections
	database.ConnectionMongoDB()

	router.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Server is Healthy...")
	})

	router.Listen(":8000")
}
