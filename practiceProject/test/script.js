let container = document.querySelector(".conainter");
let meow = [];
container.addEventListener("click",function(e){
    let x = e.clientX;
    let y = e.clientY;
    let radius  =  (Math.floor(Math.random()*100)+ 1)
    let circle = document.createElement("p");

    if(meow.length ===2){
        if (  (  R1.topLeft.x  <  R2.bottomRight.x  )  &&  (   R1.bottomRight.x   >  R2.topLeft.x  )  &&
        (  R1.topLeft.y  <  R2.bottomRight.y  )  &&
          (  R1.bottomRight.y  >  R2.topLeft.y  )  )
    }
    if(meow.length>1){
        meow = [];
        while(container.firstChild){
            container.firstChild.remove();
        }
    }
    if(radius>0){
        circle.style.width =`${radius}px`
        circle.style.height  = `${radius}px`
        circle.style.border = "2px solid black"
        circle.style.borderRadius = "50%";
        circle.style.position  ="absolute";
        circle.style.top = `${y}px` 
        circle.style.left = `${x}px` 
        container.appendChild(circle);
        let obj = circle.getBoundingClientRect()
        console.log(obj);
        meow.push(obj);

    }

})
