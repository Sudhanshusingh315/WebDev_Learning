package main

import "fmt"

// for -> only construct for looping

func main() {
	// while loop

	// i := 1

	// for i <= 3 {
	// 	fmt.Println(i)
	// 	i = i + 1
	// }

	// classic for loop
	for i := 0; i <= 4; i++ {
		if i == 2 {
			continue
		}
		fmt.Println(i)
	}
}
