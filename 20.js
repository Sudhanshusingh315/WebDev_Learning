// Map,Filter and Reduce in Js (Most imp)

// Map :--> CREATES a NEW ARRAY by performing some operaiton on each array elemets

let arr = [45,23,21];

console.log(arr);

let a = arr.map((value, index,array)=>{
    console.log(value,index,array);
    return(value+1); // jo chiz return horhi hai unse bna hua ek new array hoga 

});




// Filter Method :--> as the name suggests, filters out but returns a new array

let arr2 =  [45,23,21,0,3,5,8,9,,10,14];

let filtered_Array = arr2.filter((a)=>{
   return a>8;
})

console.log(filtered_Array);


// Reduce Method :--> 

let arr3 = [1,2,3,5,2,1,0];

let new_arr3 = arr3.reduce((h1,h2)=>{
    return h1+h2;
});

console.log(new_arr3);