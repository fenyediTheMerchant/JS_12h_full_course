// function DECLARATION = define a reusable block of code
// that performs a specific task

// function hello(){
//     console.log("Hello");
// }
// hello();

// function EXPRESSIONS = a way to define functions as 
// values or variables

// 1. Callbacks in async operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event listeners

// Variable ex.
// const hello = function(){
//     console.log("Hello");
// }

// hello();

// Value ex.
// setTimeout(function(){
//     console.log("Hello");
// },3000);

// Practical ex. before vs after.
// Function declaration
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}
// Function expression
const squares2 = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);
// Same with cubed
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
})

console.log(cubes);
// Same with filter even
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})

console.log(evenNums);
// Same with filter odd
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
})

console.log(oddNums);
// Same with reduce sum
const total = numbers.reduce(function(accumulator, element){
    return accumulator += element;
})

console.log(total);
