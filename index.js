// element selectors = 
// Methods used to target and manipulate HTML element.
// They allow you to select one or multiple HTML elements from
// the DOM.

// 1. get element by id - ELEMENT OR NULL
// 2. get elements by class name - HTML COLLECTION LIVE
// 3. get elements by tag name - HTML COLLECTION LIVE
// 4. query selector - ELEMENT OR NULL
// 5. query selector all - NODELIST STATIC

// 1. getElementById
// Reference to the heading
const myHeading = document.getElementById("my-heading");
// DOM uses camelcase conv. while css -
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

// console.log(myHeading);

// 2. getElementsByClassName
const fruits = document.getElementsByClassName("fruits");
// console.log(fruits);

fruits[0].style.backgroundColor = "yellow"

// html collections are "arrays" but have limited amount of utilities
for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

// foreach doesnt work
// fruits.forEach();

// but we can typecast the html collection to array

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
})

// 3. getElementsByTagName
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// console.log(h4Elements);

// h4Elements[0].style.backgroundColor = "orange";

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "orange";
}
for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}

// 4. querySelector, u can select tag or classname
const element = document.querySelector(".fruits");

element.style.backgroundColor = "magenta";

// 5. querySelectorAll returns a nodelist, similar to an HTML collections
// but it has built in methods, but they are static, they do
// not update like html collections

const foods = document.querySelectorAll("li");

foods[1].style.backgroundColor = "purple";

// This is not needed for nodelist
// Array.from(foods).forEach(food => console.log(food.textContent));

foods.forEach(food =>{
    food.style.backgroundColor = "purple";
})