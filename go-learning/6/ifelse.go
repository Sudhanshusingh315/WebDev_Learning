package main

import "fmt"

func main() {
	age := 10

	// if age >= 18 {
	// 	fmt.Println("person is an adult")
	// } else {
	// 	fmt.Println("person is not an adult")
	// }

	if age >= 18 {

		fmt.Println("person is an adult")
	} else if age >= 12 {
		fmt.Println("Person is a teenager")
	} else {
		fmt.Println("kiddooo")
	}
}
