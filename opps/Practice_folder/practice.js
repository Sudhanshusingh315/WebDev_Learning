function BankAccount(customerName,balance=0){
    this.customerName = customerName;
    this.balance = Number(balance);
    this.accountNumber = Date.now();


}


BankAccount.prototype.deposit = function(amount){
    this.balance = +amount;
}


BankAccount.prototype.withdraw = function(amount){
    this.balance = -amount;
}

const ammountInformation =[];

const customerForm = document.querySelector('#customerForm');
const customerName = document.querySelector('#customerName');
const customerAmount = document.querySelector('#customerAmount');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const depositAmount = document.querySelector('#depositAmmount');



customerForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let user =  new BankAccount(customerName.value,customerAmount.value);
    ammountInformation.push(user);
    console.log(ammountInformation);
})



depositForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let found = ammountInformation.find((account)=>(account.accountNumber)=== +accountNumber.value);
    ammountInformation.push(found);
    console.log(ammountInformation);
});