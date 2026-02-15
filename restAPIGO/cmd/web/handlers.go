package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
	"text/template"
)

func home(w http.ResponseWriter, r *http.Request) {
	// setting headers
	w.Header().Add("Server", "Go")

	// now initialize a slice containing the paths to the
	// two files. it's important
	// to note that the file containg our base template must be
	// "first"

	files := []string{
		"./ui/html/base.tmpl",
		"./ui/html/partials/nav.tmpl",
		"./ui/html/pages/home.tmpl",
	}

	// path is relative to the root
	ts, err := template.ParseFiles(files...)
	if err != nil {
		log.Print(err.Error())
		http.Error(w, "Internal server errror", http.StatusInternalServerError)
		return
	}

	err = ts.ExecuteTemplate(w, "base", nil)
	if err != nil {
		log.Print(err.Error())
		http.Error(w, "Internal server errror", http.StatusInternalServerError)
	}

}

func snippetView(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))

	if err != nil || id < 1 {
		http.NotFound(w, r)
		return
	}

	fmt.Fprint(w, "Display a Specific snipped with ID %d", id)
}

func snippetCreate(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Display a form for creating a new snippet..."))
}

func snippetCreatePost(w http.ResponseWriter, r *http.Request) {

	// to send 201 status code

	// you could do this but it's better it to readable
	// and know what it's doing
	// w.WriteHeader(201)

	w.WriteHeader(http.StatusCreated)
	// first we need to call writeHeader before calling
	// write and set the status code.

	msg := "Save a new snippet..."
	w.Write([]byte(msg))
}
