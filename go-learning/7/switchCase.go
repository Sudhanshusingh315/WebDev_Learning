package main

import "fmt"

func main() {
	// simple switch case

	day := 3

	switch day {
	case 1:
		fmt.Println("Monday")
	case 2:
		fmt.Println("Tuesday")
	case 3:
		fmt.Println("Thursday")
	case 4:
		fmt.Println("Friday")
	default:
		fmt.Println("Invalid day")
	}
}
