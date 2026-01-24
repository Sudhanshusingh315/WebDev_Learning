package auth

import "fmt"

// smaller case se shuru hoga package
// to vo usi package mai scope ho jati hai

// and bhar se access karna hai to
// captial karna hota hai first letter

func LoginWithCredentials(username string, password string) {
	fmt.Println("Login user using", username, password)
}
