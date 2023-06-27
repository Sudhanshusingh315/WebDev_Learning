// Practive set 

// Write a program to print the marks of a student in an object using for loop

/* Ex Obj = {
    harry: 90,
    sudhanshu: 80,
    Kg: 100
} */


let Marks = {
    Harry:90,
    sudhanshu:80,
    Kg:100,
    Nitin:101
};


for(let i =0 ; i<Object.keys(Marks).length; i++)
{
    console.log("The marks of " + Object.keys(Marks)[i] + " are " + Marks[Object.keys(Marks)[i]] );
}

console.log("I'm using for in loop under this line");

// For in loop

for(let keys in Marks)
{
    console.log("The marks of " + keys + " are " + Marks[keys]);
}


// Problem 3 , write a program to print "Try again" until the user enterx the correct number

let correct_Answer = 12;
