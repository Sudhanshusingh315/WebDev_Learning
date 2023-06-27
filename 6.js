// Conditional Expressions
let a = prompt("Hey what's your age") // this will always be a string

a = Number.parseInt(a) // typecasting, string ko number mai convert karne ka

if(a>18){
    alert("you can drive");
}

else{
        alert("you can't drive");
}


// Use of terenary operators : mostly used in two if and else that's it

let age = prompt("Tell us your age");
age = Number.parseInt(age);

console.log("You can", (age>18 ? "Drive":"Not Drive"));