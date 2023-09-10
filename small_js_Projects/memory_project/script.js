const cardArray = [
    {
        name:"cheeseburger",
        img : 'images/cheeseburger.png'
    },
    {
        name:"fries",
        img: 'images/fries.png'
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
        img:'images/milkshake.png'
    },
    {
        name:"pizza",
        img:'images/pizza.png'
    },
    {
        name:"cheeseburger", 
        img : 'images/cheeseburger.png'
    },
    {
        name:"fries",
        img: 'images/fries.png'
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
        img:'images/milkshake.png'
    },
    {
        name:"pizza",
        img:'images/pizza.png'
    },
];

// shuffling this array now
cardArray.sort(() => Math.random() - 0.5);
// console.log(cardArray);
let cardsChosenIds = [];
let cardsChosen = [];
let score = 0;
let win =[];
const cardDisplay = document.querySelector('#grid');
let card ;

const creatBoard = () => {
   for(let i=0;i<12;i++){
        card = document.createElement('img'); 
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        cardDisplay.appendChild(card);
        card.addEventListener('click',flipcard) 
        console.log(card);
    } 
}


creatBoard();

// creating a flipping board

function flipcard(){
    const cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    console.log(cardsChosenIds);
    checkForMatch();
    iswin(); 
    
}

function checkForMatch(){
    if(cardsChosen.length === 2){
        setTimeout(isMatch,200)
    }
    
}

function isMatch(){
    let card = document.querySelectorAll('#grid img');
    // console.log(card);
    if(cardsChosen[0] === cardsChosen[1]){
        win.push[cardsChosen]; 
        console.log("matched");
        card[cardsChosenIds[0]].setAttribute('src','images/white.png'); 
        card[cardsChosenIds[1]].setAttribute('src','images/white.png'); 
        card[cardsChosenIds[0]].removeEventListener('click',flipcard);
        
        card[cardsChosenIds[1]].removeEventListener('click',flipcard);
        cardsChosenIds= [];
        cardsChosen = [];

    }
    
    if(cardsChosen[0] != cardsChosen[1]){
        
        card[cardsChosenIds[0]].setAttribute('src','images/blank.png');
        card[cardsChosenIds[1]].setAttribute('src','images/blank.png');
        cardsChosen = [];
        cardsChosenIds= [];
        console.log("did not match,resetting")
    }
        
}

function iswin(){
    console.log("size of win is",win);

}





