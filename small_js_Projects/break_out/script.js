const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;

// Creating my Blocks
class Block{

    // the xAxis and yAxis are nothing but left and right for the absolute block 
    constructor(xAxis,yAxis){
        this.bottomLeft = [xAxis,yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topRight = [xAxis + blockWidth , yAxis + blockHeight];
        this.topLeft = [xAxis,yAxis + blockHeight];
    }
}

const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(350,270),
    new Block(470,270),
    new Block(590,270),
    new Block(10,230),
    new Block(120,230),
    new Block(230,230),
    new Block(350,230),
    new Block(470,230),
    new Block(590,230)


]


// addin all my blocks 
function addBlocks(){

    for(let i=0;i<blocks.length ; i++){

        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0]+'px';
        block.style.bottom = blocks[i].bottomLeft[1]+'px';
        grid.appendChild(block);
    }

}
// call this then you are ready with classes 
addBlocks();

















