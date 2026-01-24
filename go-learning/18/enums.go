package main

// enumerated types
import "fmt"

type Orderstatus string

const (
	Received  Orderstatus = "received"
	Confirmed             = "confirmed"
	Prepared              = "prepared"
	Delivered             = "delivered"
)

func changeOrderStatus(stauts Orderstatus) {
	fmt.Println("changing order status to", stauts)
}

func main() {
	changeOrderStatus(Prepared)
}
