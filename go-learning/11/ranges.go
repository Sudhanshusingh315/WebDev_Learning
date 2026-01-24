package main

import (
	"fmt"
)

// range use for iterating over data structures
// really important
func main() {
	nums := []int{6, 7, 8}

	//  with for loop
	for i := 0; i < len(nums); i++ {
		fmt.Println(nums[i])
	}

	// this can be modernasied with range
	fmt.Println("this is with range")

	// now go knows this is an int
	sum := 0
	for index, num := range nums {
		// num will be current number
		fmt.Printf("number %v is at index %v \n", num, index)
		sum += num

	}

	fmt.Printf("final sum value is %v \n", sum)

	// using range in map function

	fmt.Println("could also interate with map")

	nameMap := map[string]string{"fname": "john", "lname": "doe"}

	for key, value := range nameMap {
		fmt.Println(key, value)
	}

	fmt.Println("Only accessing keys")
	for k := range nameMap {
		fmt.Println("key", k)
	}

	// using over string

	fmt.Println("using range over strings")

	// i will be the starting byte of rune
	// c will be the unicode, or code point rune.
	for i, c := range "golang" {
		fmt.Println(i, string(c))
	}

}
