// Class

class BankAccount {
    customerName;
    accountNumber;
    balance = 0;

    constructor (customerName,balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = +balance;
    }

    // this will automatically add to the prototype;

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }
}


const sudhanshu = new BankAccount('sudhanshu',1000);
sudhanshu.deposit(1000);
console.log(sudhanshu);

const sudhanshu1 = new BankAccount('sudhanshu1',100);
sudhanshu1.deposit(200);
console.log(sudhanshu1);



// Important Node //

/*

this is called hoisting in javascript 

hello();                         |
                                 |
function hello(){                |----> /this would still work/
    console.log("Hello");        |
}                                |

But the same will not work with classes 




*/