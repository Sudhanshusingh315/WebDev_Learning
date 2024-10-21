function register() {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
          console.log("Registeration end")
          resolve();
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
  function getUseDatanigger() {
    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            return reject('Error while getting user data ');
            console.log("Got user data");
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

async function authentication() // async is itself returns promise to you can still use .then() in authenticaiton().then()
{
    try{

        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    } catch(err){
        console.log("Error is: ", err)
        throw new Error
    }
}


authentication().then(()=>{
    console.log("All set"); 
}).catch((err)=>{
    console.log("err");
})
