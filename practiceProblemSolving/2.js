// Currying fuctions: multiply all elements in an array;

function multiplyAll(arr){
    return function(num){
        let finalArray = arr.map((element)=> element*num )
        return finalArray;
    }
}

console.log(multiplyAll([1,2,3])(2))
