package auth

// ye function to package ke score mai rahegi
func extratSession() string {
	return "loggedin"
}

// ye function to ke bhar bhi jaa skti hai
func GetSession() string {
	return extratSession()
}
