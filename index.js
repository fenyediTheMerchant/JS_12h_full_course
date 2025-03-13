// Random Number Generator

// const min = 50;
// const max = 100;

// Random number from 1 to 100
// let randomNum = Math.floor(Math.random() * 100) + 1;

// Random number from min to max
// We substract the min from the max to avoid
// numbers like 120 because if random is 70 and we add 50 as min
// the result is 120
// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// Storing the html elements in const variables, skipping redundant writing
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("myLabel1");
const label2 = document.getElementById("myLabel2");
const label3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
    console.log(randomNum1);
}

