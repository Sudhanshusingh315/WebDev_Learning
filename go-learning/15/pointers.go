package main

import "fmt"

// pointers in go lang

func changeNum(num int) {
	num = 5
	fmt.Println("In changeNum", num)
}

func changeNuberByRef(num *int) {
	// de-reference
	// we recience an address
	// on that address we need to change that
	*num = 5
}

func main() {

	num := 1
	changeNum(num)

	fmt.Println("Memory address", &num)
	fmt.Println("After function call in main", num)

	changeNuberByRef(&num)
	fmt.Println("After function call in main", num)

}
