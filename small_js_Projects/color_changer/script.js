const button = document.querySelector('button');

const body = document.querySelector('body');

const color_array = ["red","blue","oragne","blue","cyan","pink","beige","lightblue"];


button.addEventListener('click',function (event) {
    changeColor(event,color_array);
});

function changeColor(event,color_array){


    let myvalue = ~~(Math.floor(Math.random()*(color_array.length)));  
    body.style.backgroundColor = color_array[myvalue];
}
