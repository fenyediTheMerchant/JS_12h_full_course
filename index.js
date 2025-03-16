// sort() = method uset to sort elements of an array in place.
// Sorts elements as string in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2 ,9 , 3, 8 ,4 ,7, 5, 6];

fruits.sort();
// This not works
// numbers.sort();

// Compare the values in pair
// After arrow is the condition
numbers.sort((a, b) => a - b);

console.log(fruits);
console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0}, 
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

// Here a is first object b is second
// This is good for numbers
people.sort((a, b) => a.age - b.age);

// This is good for string
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);