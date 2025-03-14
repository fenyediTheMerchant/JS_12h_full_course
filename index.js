// arrow functions = a concise (rovid, egyertelmu) way
// to write function expression
// Good for simple functions that you use only once
// (parameters) => some code

// V1. Old fashioned - function Declarations
function hello1(){
    console.log("Hello1");
}
hello1();

// V2. Last method - function expressions
const hello2 = function(){
    console.log("Hello2");
}
hello2();

// V3. Hottest - arrow functions
const hello3 = () => console.log("Hello3");
hello3()

// V4. Hottest - arrow functions with parameters
const hello4 = (name) => console.log(`Hello: ${name}`);
hello4("Levi")

// V5. Hottest - arrow functions with parameters
// and with multiple lines
const hello5 = (name, age) => {
    console.log(`Hello: ${name}`)
    console.log(`You are ${age} years old.`)
};
hello5("Levi", 25)

// Set Timeout ex. with function decl.
setTimeout(hello6, 3000);

function hello6(){
    console.log("Hello6");
}

// Set Timeout ex. with function expr.
setTimeout(function(){
    console.log("Hello7");
}, 3000);

// Set Timeout ex. with arrow funct.
setTimeout(() => console.log("Hello8"), 3000);


// Arrow functions with map
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(squares);
console.log(cubes);

// Arrow functions with filter
const evenNums = numbers.filter(
    (element) => element % 2 === 0 ?  true : false
);
console.log(evenNums);
const oddNums = numbers.filter(
    (element) => element % 2 !== 0 ? true : false
);
console.log(oddNums);

// Arrow functions with reduce
const total = numbers.reduce(
    (accumulator, element) => accumulator += element
);
console.log(total);