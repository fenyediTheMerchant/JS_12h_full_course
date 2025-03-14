// .filter() = creates a new array by filtering
//  out elemetns

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0 ? true : false;
}

function isOdd(element){
    return element % 2 !== 0 ? true : false;
}

// Another ex

const ages = [16, 17, 18 , 18, 19 , 20, 60];
const adults = ages.filter(isAdult);
const childrens = ages.filter(isChild);

console.log(adults);
console.log(childrens);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}

// Another ex

const words = ["apple", "orange", "banana", "kiwi",
    "pomergrenate", "coconut"
];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}
