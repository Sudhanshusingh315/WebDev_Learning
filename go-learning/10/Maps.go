package main

import (
	"fmt"
	"maps"
)

// maps -> hash, objects, dicst
func main() {
	// initialising a map

	// creating a map
	// map[key]value
	m := make(map[string]string)

	// setting an element
	m["name"] = "golang"
	m["area"] = "backend"
	m["price"] = "expenive"
	// get an element
	fmt.Println(m["name"])
	fmt.Println(m["area"])

	// what if you want to access a key that doesn't exits
	fmt.Println(m["meow"])

	m2 := make(map[string]int)

	m2["age"] = 30

	fmt.Println(m2["age"])
	fmt.Println(m2["wow"])

	fmt.Println("Length of map one")
	fmt.Println(len(m))

	// deleting a key from map

	fmt.Println(m)

	delete(m, "price")

	fmt.Println(m)

	fmt.Println("clearing map")

	clear(m)

	mapwithoutmake := map[string]int{"price": 12, "numberOfPhone": 2}

	fmt.Println(mapwithoutmake)

	// checking if two maps are equale or not

	map1 := map[string]int{
		"price": 12,
		"age":   24,
	}

	map2 := map[string]int{
		"price": 12,
		"age":   24,
	}

	fmt.Println(maps.Equal(map1, map2))

}
