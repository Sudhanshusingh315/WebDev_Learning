function arrangeNumber(arr){
    return arr.map((element,index)=>{
        return `${index+1}: ${element}`
    })
}

console.log(arrangeNumber(["a","b","c"]));