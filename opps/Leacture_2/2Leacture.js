// Constructor functions

function BankAccount(customerName,balance = 0) {

    // variable in construcotrs is called properties
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = Number(balance);

    // functions inside a constructor is called method
    /* 
    this.deposit = function(amount){
        this.balance += Number(amount);
    };
    
    this.wtihdraw = (amount)=>{
        this.balance -= amount;
    }
    */
}

// Creating a prototype.
// this works because of the prototype chaining.

BankAccount.prototype.deposit = function(amount=0){
    this.balance += amount;
}

BankAccount.prototype.wtidraw = function(amount){
    this.balance -=amount;

}



/* ======================================== */

const accountInformation = [];

// Creating an account

const accuntform = document.querySelector('#accountform'); /*form*/
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');


// Depositing an amount

const deposit = document.querySelector('#depositeform'); /*form*/
const accountNumberOfTheUser = document.querySelector("#accountName");
const amounttodeposite = document.querySelector("#deposite")

// dyanmically creating an account

accuntform.addEventListener('submit',(e)=>{
    e.preventDefault();

    let user = new BankAccount(customerName.value,balance.value);

    accountInformation.push(user);
    console.log(accountInformation);



});

// dynamically depsiting an ammount

deposit.addEventListener('submit',(e)=>{

    e.preventDefault();
    const found = accountInformation.find((user) =>user.accountNumber === +accountNumberOfTheUser.value );
    
    console.log(typeof(+amounttodeposite.value));
    found.deposit(+amounttodeposite.value);
    // found.deposit(+amounttodeposite.value);
    // newinfo.deposit(+amounttodeposite)

    console.log(accountInformation);

});

