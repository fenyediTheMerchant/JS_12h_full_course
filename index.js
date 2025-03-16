// Synchronous = Executes line by line consecutively in a
// sequantial manner. Code that waits for an operation to
// complete.

// Asynchronous = Allows multiple operations to be performed
// concurrently without waiting. Doesn't block the execution
// flow and allows the program to continue
// (I/O operations, network requests, fetching data)
// Handled with: Callbacks, Promises, Async/Await

// Sync code
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// Async code
// setTimeout is async function
setTimeout(() => {
    console.log("Task 1")
    console.log("--------------------------------");
    },2000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

// Async mode -> Ex. below = make sure task 1 runs before 2,3,4
// Resolved with a callback
function func1(callback){
    setTimeout(() => {
        console.log("Task 1");
        // Use () here to call the function..
        callback();
    },3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
    console.log("--------------------------------");
}

// Dont use () in callback!!! IT will run immideatly
func1(func2);