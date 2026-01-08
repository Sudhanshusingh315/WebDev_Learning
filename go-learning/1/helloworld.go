package main

import "fmt"

func main() {
	var conferenceName = "Go Conference"
	const conferenceTickets = 50
	var remainingTickets = 50

	fmt.Printf("welcome to %v booking application\n", conferenceName)

	fmt.Printf("We have total of %v and %v are still available", conferenceName, remainingTickets)

	fmt.Println("get your tickets here to attend")

	var userName string

	// ask user for their name to enter

	userName = "Tome"
	fmt.Printf("userName is %v \n", userName)

}
