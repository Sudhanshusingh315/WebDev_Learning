package main

import "fmt"

// functions in go

// same type ke hai to ek hi jgha likh skte hai
// same place par

func add(a, b int) int {
	return a + b
}

// function in go that returns multiple values
// sequence of these value that you are expecting in return matters
func getLanguages() (string, string, bool) {
	return "goLang", "Javasript", true
}

func processIf(fn func(a int) int) {
	fn(2)
}

func functionReturningFun() func(a int) int {
	return func(a int) int {
		return a
	}
}

func main() {
	result := add(3, 5)

	fmt.Println(result)

	fmt.Println(getLanguages())

	//  you call get them one by one, seperately
	lang1, lang2, lang3 := getLanguages()

	fmt.Printf("lang one is %v, lang two is %v, lang three is %v \n", lang1, lang2, lang3)

	// functions are first class function in GO
	fn := func(a int) int {
		return a
	}
	processIf(fn)

	// function returning a function
	newFunction := functionReturningFun()

	println(newFunction)
}
