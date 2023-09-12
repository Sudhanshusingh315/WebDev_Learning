console.log("works");
squares = document.querySelectorAll('.square');
mole = document.querySelector('.mole');
timeLeft = document.querySelector('#time-left');
score =  document.querySelector('#score');
start = document.querySelector('#start');
let hitPosition;
let randomhit;
let result =0;
console.log(squares);

start.addEventListener('click',moveMole);

function randomSquare(){
    squares.forEach(square => {
       square.classList.remove('mole');
    });
    randomhit = Math.floor(Math.random()*9);
    squares[randomhit].classList.add('mole');
    hitPosition = randomhit; 
}

function moveMole(){
    
    setInterval(randomSquare,1000);
    
}

squares.forEach(square =>{
    square.addEventListener('mousedown',()=>{
        let changed = Number(square.id);
        if(changed === hitPosition){
            console.log("meow");
            hitPosition = null;
        } 
    }    

    )    
})