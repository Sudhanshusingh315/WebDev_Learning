package main

import (
	"fmt"
	"net/http"
	"strconv"
)

func home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello world"))
}

func snippetView(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))

	if err != nil || id < 1 {
		http.NotFound(w, r)
		return
	}

	// use fmt.Springf() function to interoplate the
	// id value with a message, the write it to the
	// http response buffer
	message := fmt.Sprintf("Display a specifc snippet with Id %d", id)

	w.Write([]byte(message))

}

func snippetCreate(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Display a form for creating a new snippet..."))
}

func snippetCreatePost(w http.ResponseWriter, r *http.Request) {

	w.WriteHeader(201)
	msg := "Save a new snippet..."

	w.Write([]byte(msg))
}

func main() {
	mux := http.NewServeMux()

	// get methods
	mux.HandleFunc("GET /{$}", home)
	mux.HandleFunc("GET /snippet/create", snippetCreate)
	mux.HandleFunc("GET /snippet/view/{id}", snippetView)

	// post methods
	mux.HandleFunc("POST /snippet/create", snippetCreatePost)
	fmt.Println("server is listening at 4000")

	http.ListenAndServe(":4000", mux)
}
