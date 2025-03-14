// forEach() = method used to irate over the elements
// of an array and apply a specified function (callback)
// to each element

// array.forEach(callback);

// let numbers = [1,2,3];

// numbers.forEach(double);
// numbers.forEach(triple);
// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(element, index, array){
//     array[index] = element ** 2;
// }

// function display(element){
//     console.log(element);
// }

// Practical ex
let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

// CHALLENGE!!
function capitalize(element, index, array){
    let firstCharUpper = element.charAt(0).toUpperCase();
    let restChars = element.slice(1);
    array[index] = firstCharUpper + restChars;
}

function display(element){
    console.log(element);
}