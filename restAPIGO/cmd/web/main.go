package main

import (
	"flag"
	"log/slog"
	"net/http"
	"os"
)

type application struct {
	logger *slog.Logger
}

func main() {

	//				flag name, default value, what it is: description
	addr := flag.String("addr", ":4000", "Http network address")

	// you need to parse it before you use it.
	flag.Parse()

	// setting up a structued logging
	logger := slog.New(slog.NewTextHandler(os.Stdout, nil))

	// intialising the struct
	app := &application{
		logger: logger,
	}

	mux := http.NewServeMux()

	fileServer := http.FileServer(http.Dir("./ui/static/"))
	// get methods

	mux.Handle("GET /static/", http.StripPrefix("/static", fileServer))
	mux.HandleFunc("GET /{$}", app.home)
	mux.HandleFunc("GET /snippet/create", app.snippetCreate)
	mux.HandleFunc("GET /snippet/view/{id}", app.snippetView)

	// post methods
	mux.HandleFunc("POST /snippet/create", app.snippetCreatePost)

	//           msg             , key   , value
	logger.Info("Starting server", "addr", *addr)

	err := http.ListenAndServe(*addr, mux)

	logger.Error(err.Error())
	os.Exit(1)

}
