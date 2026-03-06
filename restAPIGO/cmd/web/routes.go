package main

import "net/http"

func (app *application) routes() *http.ServeMux {
	mux := http.NewServeMux()

	fileServer := http.FileServer(http.Dir("./ui/static/"))
	// get methods

	mux.Handle("GET /static/", http.StripPrefix("/static", fileServer))
	mux.HandleFunc("GET /{$}", app.home)
	mux.HandleFunc("GET /snippet/create", app.snippetCreate)
	mux.HandleFunc("GET /snippet/view/{id}", app.snippetView)

	// post methods
	mux.HandleFunc("POST /snippet/create", app.snippetCreatePost)

	return mux
}
