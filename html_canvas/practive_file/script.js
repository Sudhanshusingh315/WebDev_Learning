console.log("working");
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// drawing rectangles first

let c = canvas.getContext('2d');

c.fillStyle = "#ffffff"
c.fillRect(100,100,150,150);

c.fillStyle = '#8fb5f2';
c.fillRect(105,105,140,140);

c.fillStyle = '#a08ff2';
c.fillRect(110,110,130,130);

c.fillStyle = '#eb86db';
c.fillRect(115,115,120,120);

// drawing lines

for(let i=0;i<300;i++){
    let x = Math.floor(Math.random()* window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let myrandom = Math.floor(Math.random() * 16777215).toString(16);
    c.fillStyle = "#"+myrandom;
    c.beginPath();
    c.arc(x,y,30,Math.PI*2,false);
    c.fill();
    c.stroke();
}

