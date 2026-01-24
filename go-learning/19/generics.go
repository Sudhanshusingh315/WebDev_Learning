package main

func printSlice(items []int) {
	for _, item := range items {
		println(item)
	}
}

func printStringSlice(items []string) {

	for _, item := range items {
		println(item)
	}
}

// using any
// and you could also use interface{} in place of any
func printSliceGeneric[T any](items []T) {

	for _, item := range items {
		println(item)
	}
}

// using better way
// but how many could you add with pipe??

// this was before
// func printSliceBetterGeneric[T int | string](items []T) {

func printSliceBetterGeneric[T comparable](items []T) {

	for _, item := range items {
		println(item)
	}
}

func main() {
	nums := []int{1, 2, 3}
	names := []string{"golang", "typescript"}

	// had to make different functions
	// for different datatypes
	printSlice(nums)
	printStringSlice(names)

	// now any slice can be passed
	// using any
	printSliceGeneric(nums)
	printSliceGeneric(names)

	// a better wayt to do this
}
