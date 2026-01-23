package main

import (
	"fmt"
	"slices"
)

// slice -> dynamic
// most used construct in go.

func main() {
	// unintialised slice is nil
	// var nums []int

	// fmt.Println(nums == nil)
	// fmt.Println(len((nums)))

	// initialised slice
	// var nums = make([]int, 5)
	// nums = append(nums, 1)
	// nums = append(nums, 3)
	// fmt.Println(cap((nums)))
	// fmt.Println(nums)

	// slice operator
	var nums = []int{1, 6, 6, 2, 4}
	//          nums[from:to]
	// from included
	// to not included
	fmt.Println(nums[0:2])
	fmt.Println(nums[:1])

	fmt.Println(nums[1:])

	// slice package bhi atta hai

	var nums1 = []int{1, 2}
	var nums2 = []int{1, 2}

	fmt.Println(slices.Equal(nums1, nums2))

}
