
const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];
                
fruits.push({name: "grapes", color: "purple", calories: 62});
let grape = fruits.pop();

// console.log(fruits);

// forEach()

fruits.forEach(fruit => console.log(fruit.color));

// map()

const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

// filter()

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories > 100);
console.log(lowCalFruits);
console.log(highCalFruits);

// reduce()
const totalCalories = fruits.reduce((max, fruit) => 
                                    fruit.calories > max.calories ?
                                    fruit : max);
console.log(totalCalories);