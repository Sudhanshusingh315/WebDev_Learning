let x =300;
let dx = 4;
// Aminating circles and shapes with html canvas 

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

function animate(){
  requestAnimationFrame(animate);
  c.beginPath();
  c.arc(x,200,30,Math.PI * 2,false); 
  c.clearRect(0,0,innerWidth,innerHeight);
  c.stroke();
  x++;
}
animate();