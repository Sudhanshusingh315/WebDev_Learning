// Methods of somemore array

// Delete() ---> is an operator

let num = [1,2,3,4,5,6,7,8,9];
console.log(num);
delete num[0];
console.log(num.length);

// Concat() ---> Prints out new array

let num_to_added = [10,11,12,13,14,15,16];

console.log(num.concat(num_to_added));
console.log(num);

// array1.concat(array2,array3);

let num_to_array_2 = [21,22,23,24,25,26];

console.log(num.concat(num_to_added,num_to_array_2));


// Sort() ---> alphabatically sorts the array, bascially String manke sort krta hai vo

let arrayToBeSorted = [54,23,40,67,97,21,23];

console.log(arrayToBeSorted.sort());


// providing a function in this compare function, 

/*
return a-b :- ascending
return b-a :- descending
*/


const compare = (a,b) =>{
    return a - b ;
}


let NewArrayTOCompare = [551,22,3,14,5,6,0,8,229];

console.log(NewArrayTOCompare.sort(compare));

// reverser : reverses the array

console.log(NewArrayTOCompare.reverse());


// Splice and slice (Most imp) 
/*
Splice :- array.splice(2 , 3 , 1021 , 1022 , 1024 , 1025 )
                splice(khanse_shuru, Ktine_htane_hai, kitne add krde hai first argument se)

*/

NewArrayTOCompare.splice(2,3,9,10,11,12);
console.log(NewArrayTOCompare);


// Slice : creates a new array and take out a piece

let Arrayforsplice = [12,13,14,15,67];
console.log((Arrayforsplice.splice(2)));