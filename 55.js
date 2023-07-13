// Promise .then() and .catch()

let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("resolved")
        resolve("Meow")
    },4000)
});

console.log(p);

setTimeout(()=>{
    console.log(p)
},5000)



let p2 = new Promise((resolve, reject)=>{
    console.log("promise rejects")
    reject(new Error("Not a meow."))
},5000)

setTimeout(()=>{
    console.log(p2)
},6000)
console.log(p2)

p.then((value)=>{
    console.log(value);
}) 