const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
const wallWidth = 700;
const wallHeight = 300;
const ballDiameter = 20;
const userBlock = [255, 20];
let currentPosition = userBlock;
const ballBlock = [295, 40];
let ballCurrentPosition = ballBlock;
let timerId;
let xDirection = 2;
let yDirection = 2;
// Creating my Blocks
class Block {
  // the xAxis and yAxis are nothing but left and right for the absolute block
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    this.topLeft = [xAxis, yAxis + blockHeight];
  }
}

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(350, 270),
  new Block(470, 270),
  new Block(590, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(350, 240),
  new Block(470, 240),
  new Block(590, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(350, 210),
  new Block(470, 210),
  new Block(590, 210),
];

// addin all my blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}
// call this then you are ready with classes
addBlocks();

// adding user
const user = document.createElement("div");
user.classList.add("user");
drawingUser();
grid.appendChild(user);

// drawingUser
function drawingUser() {
  user.style.left = userBlock[0] + "px";
  user.style.bottom = userBlock[1] + "px";
}

// Move user
function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 5) {
        currentPosition[0] -= 10;
        drawingUser();
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < 590) {
        currentPosition[0] += 10;
        drawingUser();
      }
      break;
  }
}

// my navigation
document.addEventListener("keydown", moveUser);

// drawing my ball
function drawingBall() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

// creating a ball and adding
const ball = document.createElement("div");
ball.classList.add("ball");
drawingBall();
grid.appendChild(ball);

// moving my ball
function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawingBall();
  checkForCollisions();
}

timerId = setInterval(moveBall, 40);

// check Collisions
function checkForCollisions() {
  if (
    ballCurrentPosition[0] >= wallWidth - ballDiameter ||
    ballCurrentPosition[1] >= wallHeight - ballDiameter ||
    ballCurrentPosition[0] <= 0 
  ) {
    changeDirection();
  }
  if(ballCurrentPosition[1]<= 0){
    clearInterval(timerId);
    console.log("lose")
    document.removeEventListener('keydown',moveUser);
  }
  
}

// changinDirection

function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
}
