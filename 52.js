// Callback hell

// Syncronous programming
let a = prompt("what is your name");
let b = prompt("what is your age");
let c = prompt("what is your fav color");

console.log(`${a} is ${b} years old and has ${c} fav color `)

// Asynchronous programming

setTimeout(() => {
    
}, console.log("meow hai kya?"),2000);

// Callback fucntions, fucniton ke andar function is call back function

const calculate = (a,b,operation) => {
    return operation(a,b);

}
// Mehtod 1
const addition = calculate(3,4,function (num1 , num2){
    return num1 + num2;
})

console.log(addition);



const subtraction = calculate(4,3, function(num1, num2){
    return num1 - num2;
})

// Method 2
const multiplication = (num1, num2) => (num1 * num2)


const multiplication_of_Two_numbers = calculate(3,5,multiplication); // see how i didn't pass the arguments? because i'm passing fucntion and not calling it


console.log(multiplication_of_Two_numbers)