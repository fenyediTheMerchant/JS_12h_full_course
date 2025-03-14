// spread operator = ...allows an iterable such as an
// array or string to be expanded into seperate elements
// ("unpacks the elements") or to combine multiple arrays


// Number Example
let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(1, 2, 3, 4, 5); VALID
// let maximum = Math.max(numbers); NOT VALID
let maximum = Math.max(...numbers); //VALID
let minimum = Math.min(...numbers);


console.log(numbers);
console.log(maximum);
console.log(minimum);

// Username Example
let username = "Fenyedi Levente";
// let letters = [username]; result is = Fenyedi Levente
// let letters = [...username]; //result is F,e,n...
let letters = [...username].join("-");

console.log(letters);

// Fruit Example
let fruits = ["apple", "orange", "banana"];
// console.log(fruits);
// console.log(typeof fruits);

let vegetables = ["carrots","celery","potatoes"];

// let newFruits = [...fruits]; shallow copy
// console.log(newFruits);
// console.log(typeof newFruits);
let foods = [...fruits, ...vegetables, "eggs", "milk"]; //

console.log(foods);
