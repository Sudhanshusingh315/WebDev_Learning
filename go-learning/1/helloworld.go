package main

import "fmt"

func main() {
	conferenceName := "Go Conference"
	const conferenceTickets = 50
	var remainingTickets uint = 50

	fmt.Printf("conferenceTickets is %T, remainingTickets is %T\n", conferenceTickets, remainingTickets)

	fmt.Printf("welcome to %v booking application\n", conferenceName)

	fmt.Printf("We have total of %v and %v are still available", conferenceName, remainingTickets)

	fmt.Println("get your tickets here to attend")

	var bookings [50]string

	bookings[0] = "Nana"

	var userTickets int

	var firstName string
	var lastName string
	var email string
	// ask user for their name to enter

	// fmt.Scan(userNameToBe)

	// ask the use for first and last name

	fmt.Println("Enter your first Name")
	fmt.Scan(&firstName)

	fmt.Println("Enter your last Name")
	fmt.Scan(&lastName)

	fmt.Println("Enter your email address")
	fmt.Scan(&email)

	fmt.Println("How many tickets do you want to buy ?")
	fmt.Scan(&userTickets)

	remainingTickets = remainingTickets - uint(userTickets)

	fmt.Printf("first name is %v and last name is %v, and has tickers %v\n", firstName, lastName, userTickets)

	fmt.Printf("Thank you %v %v for booking tickets, you will recieve an email\n", firstName, lastName)
	fmt.Printf("Remaining tickets are %v", remainingTickets)
}
