// Loops in array
let num = [3,54,1,2,4];


// Claical for loop
for(let i = 0; i<num.length;i++ )
{
    console.log(num[i]);

}

// For each loop in arrays

num.forEach((element)=>{
    console.log(element*element);
});


// Array.from :--> is used to create an array from any other Object

let Name = "Sudhanshu";

let arr = Array.from(Name);
console.log(arr); // now "sudhanshu" is an array

// For of

for(let i of num)
{
    console.log(i);
}

// For in

for(let keys in num)
{
    console.log(keys);
}