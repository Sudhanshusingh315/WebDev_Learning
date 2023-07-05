// Methods in array
let num = [1,2,3,4,34,5];

// Converting an array to a string

let b =num.toString();
b = console.log(typeof(b));

//  String formarting

let c = num.join("_");
console.log(c);

// Pop an element , it will change the original array

let popped = num.pop();
console.log(num, "this is my popped element", popped);

// push : will add an array

let push = num.push(45);

console.log(push,"and the array becomes", num);

// shift removes the first element

let shifted  = num.shift();
console.log(shifted,"and the array becomes", num);

// unshift adds array to the starting 

let unshifted = num.unshift(67);
console.log();