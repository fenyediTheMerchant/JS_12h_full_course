// setTimeout() = a function in JavaScipr that allows you to
// schedule the execution of a function after an amount of time (ms)

// Times are approximate (varies based on the workload of the
// Javascript runtime env.) Shouldn't be used on stuff like stopwatch


// setTimeout(callback, delay);
// function sayHello(){
//     window.alert("Hello");
// }
// setTimeout(sayHello, 3000);


// setTimeout(anonymus func., delay);
// setTimeout(function(){window.alert("Hello")}, 3000);


// setTimeout(arronfunct., delay) 
// setTimeout(() => window.alert("Hello"), 3000)


// clearTimeout(timeoutId) = 
// can cancel a timeout before it triggers

// const timeoutId = setTimeout(() => window.alert("Hello"), 3000)
// clearTimeout(timeoutId);

let timeoutId;

function startTimer(){
    timeoutID = setTimeout(() => window.alert("Hello"), 1000); 
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutID);
    console.log("CLEARED");
}