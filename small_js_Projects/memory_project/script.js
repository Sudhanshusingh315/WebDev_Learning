const cardArray = [
    {
        name:"cheeseburger",
        img : 'images/cheesburger.png'
    },
    {
        name:"fries",
        img: 'images/friens.png'
    },
    {
        name:"hotdog.png",
        img:'images/hotdog.png'
    },
    {
        name:"ice-cream",
        img:'images/ice-cream.png'
    },
    {
        name:"milkshakes",
        img:'imgaes/milkshakes.png'
    },
    {
        name:"pizza",
        img:'images/pizza.png'
    },
    {
        img : 'images/cheesburger.png'
    },
    {
        name:"fries",
        img: 'images/friens.png'
    },
    {
        name:"hotdog.png",
        img:'images/hotdog.png'
    },
    {
        name:"ice-cream",
        img:'images/ice-cream.png'
    },
    {
        name:"milkshakes",
        img:'imgaes/milkshakes.png'
    },
    {
        name:"pizza",
        img:'images/pizza.png'
    },
];

cardArray.sort(() => Math.random() - 0.5);
// console.log(cardArray);

const cardDisplay = document.querySelector('#grid');
let card ;

const creatBoard = () => {
   for(let i=0;i<12;i++){
        card = document.createElement('img'); 
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard) 
        cardDisplay.appendChild(card);
        console.log(card);
   } 
}

creatBoard();

// creating a flipping board

function flipcard(){
    console.log('clicked');
}