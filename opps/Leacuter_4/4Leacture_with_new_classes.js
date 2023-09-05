class BankAccount{
    customerName;
    balance;
    accountNumber;

    // this is how you accept the given arguments ig
    constructor(customerName,balance=0)
    {
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    //now writhing methods here
    deposit(amount){
        this.balance += +amount; 
    }
    withdraw(amount){
        this.balance -= +withdraw;
    }
}
// there, finished the main class

// writing class that would inherit this calss

class CurrentAccount extends BankAccount{
    transactionAccount = 6000;

    constructor(customerName,balance){
        super(customerName,balance)
    }
}