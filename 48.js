// Eventlitern adding to an element

let btn = document.getElementById("Button");

let x = (e)=>{
    console.log("This is with 1");
}

let y = (e)=>{
    console.log("This is with 1");
} 

let a = prompt("Enter a number 1 or 2");

if(a==1)
{
    btn.addEventListener('click',x);

}
else{btn.addEventListener('click',y);}

