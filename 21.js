// Practice set of arrays
/*Q1
Create an array of numbers and take input form the user to all numbers to this array
*/
let arr = [12,23,35,56,67];

let a = prompt("Enter a number");
arr.push(a);
a = Number.parseInt(a);
// arr.push(a);
// console.log(arr)

/*Q2

Keep adding numbers to the same array unitl 0 is added to the array

*/

do {
    a = prompt("Enter a number");
    a = Number.parseInt(a);
    arr.push(a);
}while(a!=0)
console.log(arr);

/* Q3
    filers for nuumbers in array that are divisible by 10
*/

const arry = [12,30,40,42,546,540];

const checking = (a) =>
{
    return a%10==0;
}
const result = arry.filter(checking);

console.log(result);












