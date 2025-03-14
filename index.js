//  while loop =  repeat some code WHILE some condition is true

// let username = "";

// while (username === "" || username === null){
//     username = window.prompt(`Enter your name:`);
// }

// let username;

// do {
//     username = window.prompt(`Enter your name:`);
// } while (username === "" || username === null);


// console.log(`Hello ${username}`);

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`);
    if(username === "myUsr" && password === "myPwd"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials! Please try again");
    }
}