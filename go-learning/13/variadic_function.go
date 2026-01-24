package main

import "fmt"

// variadic functions

func sum(nums ...int) int {
	// nums here inside the function
	// becuaes slice

	total := 0

	for _, num := range nums {
		total += num
	}

	return total
}

func main() {

	numsSlice := []int{3, 4, 5, 6}

	resutl := sum(3, 5, 6)

	fmt.Println(resutl)

	// something like sprea....
	result2 := sum(numsSlice...)

	fmt.Println(result2)
}
