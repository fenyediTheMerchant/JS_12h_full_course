// destructuring = extract values from arrays and objects
// then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perfom object destructuring
// 5 examples

// 
// let letter = word[0];

// EX1
// Swap th value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

// EX2
// Swap 2 elements of an array

// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// EX3
// Assign array elements to variables
const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = 
    colors;

console.log(firstColor,secondColor,thirdColor, extraColors);

// EX4
// Extract values from objects
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job="Unemployed"} = person2;

console.log(firstName, lastName, age, job);

// 👍

// EX5
//  Desctructure in function parameters

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);