// ternary operator = condition ? codeIfTrue : codeIfFalse

// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor"
// console.log(message);

// let time = 1;
// let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);

let purhcaseAmount = 125;
let discount = purhcaseAmount > 100 ? 10 : 0;
console.log(
    `Your total is $${purhcaseAmount *  (discount - 1) / 100}`
);