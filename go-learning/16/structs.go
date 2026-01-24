package main

import (
	"fmt"
	"time"
)

// Structs
// custom datastructures

// order struct

// struct as a blueprint

// read this after part 3

// struc embedding

type customer struct {
	name  string
	phone string
}

type order struct {
	id           string
	amount       float32
	status       string
	createdAt    time.Time // nanosecond precision
	customerInfo customer
}

// go does not have constructors
// we make our own
// naming convention is to start with New

func newOrder(id string, amount float32, status string) *order {
	// initial code goes here...

	myOrder := order{
		id:     id,
		amount: amount,
		status: status,
	}

	// es wale constructor se address return
	// karna hai mostly
	return &myOrder
}

// receiver type
// and convention is to name first letter of your struct
func (o *order) changeStatus(status string) {
	// struct automatically dereferencing karta hai
	// you don't have to *o.order
	o.status = status
}

func (o *order) changeAmount(amount float32) {
	o.amount = amount
}

func main() {
	// jese class ka instance hota hai, same
	// struct ka instance hoga

	// read this part after first
	// inline struct

	language := struct {
		name   string
		isGood bool
	}{
		"golang", true,
	}

	fmt.Println("second part language", language)

	// do this part first -1
	// if you don't set any fiedl, default value is zero value
	// int => 0, float => 0, string="",bool=>false

	// myOrder := order{
	// 	id:     "1",
	// 	amount: 50.00,
	// 	status: "received",
	// }

	myOrder2 := order{
		id:        "2",
		amount:    100,
		status:    "delivered",
		createdAt: time.Now(),
	}

	// myOrder.createdAt = time.Now()

	// before

	// myOrder.changeStatus("confirmed")
	// myOrder.changeAmount(40.00)

	// after

	fmt.Println("Order struct", myOrder2)

	myOrder := newOrder("1", 30.5, "received")
	fmt.Println("constructor call amount", myOrder.amount)
}
