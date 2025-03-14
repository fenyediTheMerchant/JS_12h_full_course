// rest parameters = (...rest)
// allow a function work with a variable number of arguments
// by building them into an array

// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

// enables functions to accept multiple arguments in a flexible way

// bundes values into an array and writes it out
function openFridge(...foods){
    console.log(foods);
}

// bundles values into an array and returns that array
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

//SUM Example

// creates an array from the passed arguments
function sum(...numbers){
    console.log(numbers)
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAverage(...numbers){
    console.log(numbers)
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

console.log(`Your total is ${sum(1,2,3,4,5,6,7,8,9,10,20)}`);
console.log(`Your total is ${getAverage(1,2,3,4,5,6,7,8,9,10,20)}`);

// Combining strings

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);