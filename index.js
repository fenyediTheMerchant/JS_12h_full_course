// Method Chaining = 
// Calling one method after another in one -
// continuous line of code.

let username = window.prompt("Enter your username:");

// ------ No method chaining ------

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// ------ WITH method chaining ------

username = username.trim().charAt(0).toUpperCase() +
            username.trim().slice(1).toLowerCase();

console.log(username);

// Super coool!!