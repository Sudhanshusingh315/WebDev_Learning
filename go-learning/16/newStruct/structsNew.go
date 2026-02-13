package main

import (
	"encoding/json"
	"fmt"
)

// we pass by reference
func (e *Employee) updateName(newName string) {
	e.Name = newName
}
func (a Address) printAdress() {
	fmt.Println(a.Street)
}

type Employee struct {
	Name     string `json:"name"`
	Age      int    `json:"age"`
	IsRemote bool   `json:"isRemote"`
	Address
}

type Address struct {
	Street string `json:"street"`
	City   string `json:"city"`
}

func main() {

	address := Address{
		Street: "123 main street",
		City:   "New York",
	}
	employee1 := Employee{
		Name:     "Alice",
		Age:      30,
		IsRemote: true,
		Address:  address,
	}
	fmt.Println("Employee Name:", employee1.Name)
	fmt.Println("Address: ", employee1.Street)

	// anon struct

	job := struct {
		title  string
		salary int
	}{
		title:  "software engineer",
		salary: 100000,
	}

	fmt.Println(job.salary)

	jsonData, _ := json.Marshal(employee1)
	fmt.Println(string(jsonData))

}
