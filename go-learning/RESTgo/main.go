package main

import (
	"bytes"
	"fmt"
	"log/slog"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	// hello mux
	mux.HandleFunc("/", handleHello)

	// goodby mux
	mux.HandleFunc("/goodbye", handleGoodBye)

	// parameterized request
	mux.HandleFunc("/hello/", handleHelloParameterized)

	// listening to server
	http.ListenAndServe(":8080", mux)

}

func handleHello(w http.ResponseWriter, _ *http.Request) {
	_, err := w.Write([]byte("Hello world!\n"))
	if err != nil {
		slog.Error("error writing response", "err", err)
		return
	}

}

func handleGoodBye(w http.ResponseWriter, r *http.Request) {
	_, err := w.Write([]byte("Goodbye meow\n"))

	if err != nil {
		slog.Error("error writing response on goodby", "err", err)
		return
	}

}

func handleHelloParameterized(w http.ResponseWriter, r *http.Request) {
	params := r.URL.Query()
	fmt.Println("How does params look like")
	fmt.Println(params)

	userList := params["user"]

	var output bytes.Buffer

	output.WriteString("Hello, ")
	output.WriteString(userList[0])
	output.WriteString("! \n")

	_, err := w.Write(output.Bytes())

	if err != nil {
		slog.Error("erroe writing response body", "err", err)
		return
	}

}
