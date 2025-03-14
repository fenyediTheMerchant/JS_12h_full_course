// callback = a function that is passed as an argument
// to another function

// used to handle asynchronous operations:
// 1. Reading a file
// 1.ex: After you done reading the file, print it out
// 2. Network requests
// 3. Interacting with databases

// Ex. "Hey bro, when you are done, call this next.."

// Here goodbye comes first!
// hello();
// goodbye();

// function hello(){
//     setTimeout(function(){
//         console.log("Hello");
//     }, 3000);
// }

// function goodbye(){
//     console.log("Goodbye");
// }

// Here hello comes first!
//  dont use goodbye() cuz it is instant
// hello(wait);

// function hello(callback){
//     console.log("Hello");
//     callback();
// }

// function wait(){
//     console.log("Wait!");
// }

// function leave(){
//     console.log("Leave!");
// }

// function goodbye(){
//     console.log("Goodbye");
// }

sum(displayPage, 5, 10);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayConsoleWithText(result){
    console.log(`Your result is: ${result}`);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}