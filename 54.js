// Promises
// Solution to callback hell is promises
// code either executes of fail, in both the cases the subscriber will be notifited

let promises = new Promise(function(resolve, reject){
    console.log("inside a promise")
    resolve(56);
})

console.log("Hellow")
setTimeout(()=>{
    console.log("Hello is 2 second")
},2000)


console.log("my name is sudhanshu")

console.log(promises)