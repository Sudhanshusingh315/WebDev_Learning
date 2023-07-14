// Scenario

/*

1) Register
2) Send Welcome Emal
3) Login
4) Get User data
5) Display user data

*/

function register(callback) {
  setTimeout(() => {
    console.log("Register end");
    callback();
  }, 2000);
}
function sendEmail(callback) {
  setTimeout(() => {
    console.log("Email sent");
    callback();
  }, 1000);
}
function login(callback) {
  setTimeout(() => {
    console.log("login end");
    callback();
  }, 2000);
}
function getUserData(callback) {
  setTimeout(() => {
    console.log("Got user data");
    callback();
  }, 6000);
}
function displayUserData(callback) {
  setTimeout(() => {
    console.log("user data displayed");
    callback();
  }, 3000);
}


// Nesting function, and this is so complex, and special term is CALLBACK HELL

// and solution to this is promises, well it's only one of the best features of promises

register(() => {
  sendEmail(() => {
    login(() => {
      getUserData(() => {
        displayUserData(() => {});
      });
    });
  });
});

console.log("Other application works");