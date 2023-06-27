/* 

    For loops
    For In Loops
    For Of Loops
    While Loops

*/
let sum = 0;
let n = prompt("Enter the natural number n");

n = Number.parseInt(n);


for(let i=0 ;i<n; i++)
{
    sum += i+1;

}
console.log("This is the value of the sum of n natural numbers",sum);

// ------------ This is for the factorial --------------

let number = prompt("Enter a number to find the factorial of");

let factorial = 1;

for(let i=1; i<=number ; i++)
{
    factorial *= i;

}

console.log("This this answer to the factorial code ",factorial);




/*     FOR IN LOOP      */

let marks={
    sudhanshu: 90,
    nitin:85,
    Krishan:95

}
// a is key aarhi hai and marks[a] keys se related values
for(let a in marks )
{
    console.log("The marks of " + a + " are " + marks[a]);
}


/*    For Of Loop     */
/*  for , for of loop to work Object needs to be itterable else it won't work    */

for(let b of "Sudhanshu")
{
    console.log(b);
}



