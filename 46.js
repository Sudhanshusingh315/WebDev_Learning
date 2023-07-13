// Straight to 46.js because beech mai esi faltu ka pardha hai kuch khas nhi hai you can also learn it on the go, like seriously

// SetInterval and SetTimeout

alert("Meow Meow");

setTimeout(() => {
    alert("Meow is inside of settimeout")
}, 2000);


const sum = (a,b,c) =>{
    console.log("The sum is ",a+b+c);
}

setTimeout(sum, 1000,1,2,4);