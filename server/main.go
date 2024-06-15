package main

import (
	"log"
	"net/http"

	"server/config"
	"server/handlers"

	"github.com/gorilla/mux"
)

func main() {
	config.ConnectMongoDB()

	r := mux.NewRouter()
	r.HandleFunc("/auth/google/login", handlers.GoogleLoginHandler)
	r.HandleFunc("/auth/google/callback", handlers.GoogleCallbackHandler)
	r.HandleFunc("/auth/discord/login", handlers.DiscordLoginHandler)
	r.HandleFunc("/auth/discord/callback", handlers.DiscordCallbackHandler)

	http.Handle("/", r)
	log.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
