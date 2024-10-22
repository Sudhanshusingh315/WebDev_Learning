// let num1:number = 1;

// function calculate(num1 : number,num2 : number){
//     return num1 + num2;

// }

// calculate(num1,3);


// function getTotal(numbers: number[]){
//     return numbers.reduce((acc,item)=>{
//         return acc+item;
//     },0)

// }

// console.log(getTotal([3,2,1]));

// ------------------ SECOND PART ----------------------------

// const user ={
//     firstName:'Jhon',
//     lastName:'doe',
//     role:'professor',
// };


// console.log(user.)

// Types alias

// type User = {
//     name:string,
//     age:number,
//     address:string,
//     pincode ?:number // meaning this property is optional
// }
 
// const user:User ={
//     name:"Sudhanshu",
//     age: 23,
//     address:"main street"

// }

// // What this function going to accept and what will be the type that this function will return;
// // by default it's void
// function login(userData:User):User{
//     return userData;
// }


// type ID = number | string;

// const userId:ID = "userID"



// --------------------------------- Interfaces ---------------------------------------

// there is no eqaul sign in interfaces
interface Transaction {
    payerAccountNumber : number;
    payeeAccountNumber : number;
}

interface BackAccount {
    accountNumber:number;
    accountHolder : string;
    balance: number;
    isActive:boolean;
    transaction: Transaction[]

}

// Transactions
const transaction1 : Transaction = {
    payerAccountNumber:123,
    payeeAccountNumber:321
}

const transaction2 : Transaction = {
    payerAccountNumber:213,
    payeeAccountNumber:132
}

const bankAccount:BackAccount = {
    accountNumber:123,
    accountHolder:"Jhon doe",
    balance: 4000,
    isActive:true,
    transaction :[transaction1,transaction2]
}


//  Extending interfaces

interface Book {
    name:string;
    price:number;
}

interface Ebook extends Book{
    format:string;
    typeOfBook:string;
}

interface AudioBook extends Book,Ebook{
    duration:number;
}


const book:Book= {
    name:'Atomic habits',
    price:1200
}

const Ebook1 : Ebook = {    
    name:'Ikagi',
    price:100,
    format:'pdf',
    typeOfBook:"Black and White"
}

const AudioBook1 : AudioBook = {
    name:'Ikagi',
    price:100,
    format:'dox',
    typeOfBook:'Color',
    duration:1
}

// Unions

type ID = number | string

function prindId(id:ID){
    console.log(id)
}













