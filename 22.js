/* write a js program to generate a random  number and store it in a variable the program then take aan input from the use to tell them wheter the guess was corrent , greater or lower than the original number.
 */

let a = Math.floor(Math.random() * 100)
let guessed = 0;

while(a!=guessed)
{   
    guessed = prompt("Enter the number");
    guessed = Number.parseInt(guessed);
    if(guessed>a)
    {
        console.log("guess a bit lower");
    }
    else
    {
        console.log("guess a bit higher");
    }
};

console.log("You gussed the right number");