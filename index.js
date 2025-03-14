// function =  A section of reusable code.
// Declare code once, use it whenever you want.
// Call the function to execute that code.

// function happyBirthday(username, age){
//     console.log(`Happy Birthday to you!`);
//     console.log(`Happy Birthday to you!`);
//     console.log(`Happy Birthday dear ${username}!`);
//     console.log(`Happy Birthday to you!`);
//     console.log(`You are ${age} years old.`);
// }
// // Passing arguments to the function
// happyBirthday("Fenyedi Levente", 25);
// happyBirthday("SpongeBob", 30);
// happyBirthday("Patrick", 37);


function add(x, y){
    return x + y;
}
function substract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
// etc...
function isEven(x){
    return (x % 2 === 0) ? true : false;
}
function isValidEmail(email){
    return (email.includes("@") && email.includes(".")) ? true : false;
}

console.log(add(20,35));
console.log(substract(20,35));
console.log(multiply(20,35));
console.log(isEven(19));
console.log(isValidEmail("fenyedi.leventefake.com"));