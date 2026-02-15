package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	// get methods
	mux.HandleFunc("GET /{$}", home)
	mux.HandleFunc("GET /snippet/create", snippetCreate)
	mux.HandleFunc("GET /snippet/view/{id}", snippetView)

	// post methods
	mux.HandleFunc("POST /snippet/create", snippetCreatePost)
	fmt.Println("server is listening at 4000")

	err := http.ListenAndServe(":4000", mux)

	log.Fatal(err)

}
