package database

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var col *mongo.Collection

func ConnectionMongoDB() {

	env_err := godotenv.Load()
	if env_err != nil {
		log.Fatal("Error Loading .env file")
	}
	DATABASE_URL := os.Getenv("DATABASE_URL")
	clientOption := options.Client().ApplyURI(DATABASE_URL)
	client, err := mongo.Connect(context.TODO(), clientOption)
	if err != nil {
		panic(err)
	}
	fmt.Println("Database is connected")

	col = client.Database("nftdb").Collection("nftdata")

}
