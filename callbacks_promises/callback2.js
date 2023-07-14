// Solution to  hell, i.e promises

function register() {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
          return reject('Error while rgistering......');
          console.log("Register end");
        }, 2000);
    })
}
  function sendEmail() {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
          console.log("Email sent");
          resolve();
        }, 1000);
    })
}
  function login() {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
          console.log("login end");
          resolve();
        }, 2000);
    })
}
  function getUserData() {
    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
          console.log("Got user data");
          resolve();
        }, 6000);
    })
}
  function displayUserData() {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
          console.log("user data displayed");
          resolve();
        }, 3000);
    })
}
  


// ye .then() ke andar fucntion pass hoga, call mat kardena. call karna .then() ka kaam hai 
register()
        .then(sendEmail)
        .then(login)
        .then(getUserData)
        .then(displayUserData)
        .then(()=>{
            console.log("chup randike kuch bhi beje jaa rha hai ")
        }).catch((err)=>{
            console.log('Error...',err)
        })