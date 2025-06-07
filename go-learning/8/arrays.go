package main

import "fmt"

// numbered sequence of specific length
func main() {
	var nums [4]int
	var arrayWithStrings [4]string
	nums[0] = 1
	fmt.Println(nums[0])
	fmt.Println(nums)
	fmt.Println(arrayWithStrings)
	fmt.Println(len(nums))

	var vals [4]bool
	fmt.Println(vals)
}
