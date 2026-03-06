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

	//           msg             , key   , value
	logger.Info("Starting server", "addr", *addr)

	err := http.ListenAndServe(*addr, app.routes())

	logger.Error(err.Error())
	os.Exit(1)

}
