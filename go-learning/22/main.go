package main

import (
	"leaderofmeow/auth"
	"leaderofmeow/user"
)

func main() {
	auth.LoginWithCredentials("leaderofomeow", "secret")
	session := auth.GetSession()
	println("session", session)

	user := user.User{
		Email: "user@gmail.com",
		Name:  "bubble meow",
	}

	println("user email and it's name ", user.Email, user.Name)
}
