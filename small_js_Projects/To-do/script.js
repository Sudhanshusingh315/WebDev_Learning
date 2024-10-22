const inputBox = document.getElementById("input-tag");
const listContainer = document.getElementById("list-container");

const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    if(inputBox.value === ''){
        alert("You must enter something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =  document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);

    }

    inputBox.value = '';
})

listContainer.addEventListener("click",(e)=>{
    console.log(e);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})
