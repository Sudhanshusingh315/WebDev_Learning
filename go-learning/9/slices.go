package main

import "fmt"

// slice -> dynamic
// most used construct in go.

func main() {
	// uninalised slice is nil
	// var nums []int

	// fmt.Println(nums == nil)
	// fmt.Println(len((nums)))

	// var nums = make([]int, 5)
	// nums = append(nums, 1)
	// fmt.Println(cap((nums)))
	// fmt.Println(nums)

	// slice operator

	var nums = []int{1, 6, 6, 2, 4}

	fmt.Println(nums[1:2])

}
