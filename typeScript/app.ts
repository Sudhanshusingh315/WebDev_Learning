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


type ID = number | string;

const userId:ID = "userID"
