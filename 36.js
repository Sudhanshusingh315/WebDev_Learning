// this is important (Seaching the DOM is important)
// Covered this from different video 
// https://www.youtube.com/watch?v=fYR3i0mcE5c (Part 1)


// console.log("woking");
// let a  = document.documentElement;
// console.log(a);

// console.log(document.body);
// console.log(document.head);
// console.log(document.childNodes);
// console.log(document.body.children);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// let b = Array.from(document.body.childNodes);
// console.log(b);


// // How to see all siblings of html element
// let ulTag = (document.body.children[0]);
// console.log(ulTag.children[1]);
// const tableTag = document.body.children[1];
// console.log(tableTag)

let tagStored = document.getElementById("element")

tagStored.style.backgroundColor = "#663399";

let liTags = document.getElementsByClassName("List")

liTags = Array.from(liTags);

for(let color in liTags)
{
    liTags[color].style.backgroundColor = "red";

}


const selectingAll = document.querySelectorAll(".List")
console.log(selectingAll)


const allDivs = document.querySelectorAll("allDivs")