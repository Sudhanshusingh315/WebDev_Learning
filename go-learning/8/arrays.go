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

	// to declare it in single line
	newArray := [3]int{11, 23, 4}
	fmt.Println(newArray)

	// 2d array in golang

	newArray2d := [2][2]int{{3, 4}, {5, 6}}
	fmt.Println(newArray2d)

}
