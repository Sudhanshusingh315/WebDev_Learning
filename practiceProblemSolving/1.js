// Trimming a string;
function trim(str,size){
    console.log(str.length < size ? str: str.slice(0,str.length>3 ? size-3:size))
}



trim("meow can does a lot of fun ",14);