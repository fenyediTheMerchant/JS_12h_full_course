// DOM Navigation = The process of navigating through the structure
// of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSiblin
// .parentElement
// .children

// .firstElementChild --------------------------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

// query selector all ex. combined with .lastElementChild------

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "red";
})

// .nextElementSibling --------------------

const element2 = document.getElementById("apple");
const nextSibling = element2.nextElementSibling;
nextSibling.style.backgroundColor = "lightgreen";

// .previousElementSiblin ----------------

const element3 = document.getElementById("ice cream");
const prevSibling = element3.previousElementSibling;
prevSibling.style.backgroundColor = "magenta";

// .parentElement --------------

const element4 = document.getElementById("ice cream");
const parent = element4.parentElement;
parent.style.backgroundColor = "orange";

// ..children -----------

const element5 = document.getElementById("vegetables");
const childrens = element5.children;
Array.from(childrens).forEach(children => {
    children.style.backgroundColor = "grey";
})

// get ~middle children

childrens[Math.floor(childrens.length / 2)].style.backgroundColor = "pink";
