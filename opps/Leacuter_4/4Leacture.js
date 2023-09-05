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
// and idhar arrow functions kaam ni karte
BankAccount.prototype.deposit = function(amount=0){
    this.balance += +amount;
}

BankAccount.prototype.wtidraw = function(amount){
    this.balance -=amount;

}


function SavingAccount(customerName,balance){
    
    // this is called constructor linking
    BankAccount.call(this,customerName,balance);

    this.transactionLimit = 6000;

}

// this way to add all the methods from parent class
SavingAccount.prototype = Object.create(BankAccount.prototype);

// ye customerName and balance esliye pass kiya kyuni ki krta ye to default BankAccount ki le leta
let user = new SavingAccount('sudhanshu',600);

user.deposit(400);

console.log(user);