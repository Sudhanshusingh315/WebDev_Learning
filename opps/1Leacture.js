// Constructor functions
function BankAccount(customerName,balance = 0) {

    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function(amount){
        this.balance += amount;
    };
    
    this.wtihdraw = (amount)=>{
        this.balance -= amount;
    }

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


accuntform.addEventListener('submit',(e)=>{
    e.preventDefault();

    let user = new BankAccount(customerName.value,balance.value);

    accountInformation.push(user);
    console.log(accountInformation);



});


deposit.addEventListener('submit',(e)=>{

    e.preventDefault();
    const found = accountInformation.find((user) =>user.accountNumber === +accountNumberOfTheUser.value );
    
    console.log(typeof(+amounttodeposite));
    found.deposit(+amounttodeposite);
    // found.deposit(+amounttodeposite.value);
    // newinfo.deposit(+amounttodeposite)

    console.log(accountInformation)

});




















