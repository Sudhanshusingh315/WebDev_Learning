console.log("meow");
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

c.fillRect(100,100,80,60);
c.fillRect(400,300,80,60);
c.strokeRect(300,200,100,100);

// drawing a line

c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.strokeStyle = "#fcba03"; 
c.stroke();

// creating an arc
// crating many circles
for(let i=0;i<100;i++)
{
    let x = Math.floor(Math.random()* window.innerWidth);
    let y = Math.floor(Math.random()* window.innerHeight);
    let myrandom = Math.floor(Math.random()*16777215).toString(16); 
    console.log(x);
    console.log(y);

    c.fillStyle = "#"+myrandom;

    c.beginPath();
    c.arc(x,y,45,Math.PI * 2,false);
    c.fill();

    c.stroke();


}