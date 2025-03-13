const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;

mySubmit.onclick = function(){
    age = Number(myText.value);
    console.log(age);
    if(age >= 50){
        console.log("You are over 50.");
        resultElement.textContent = `Your age is ${age}`;
    }
    else{
        console.log("You are under 50.");
    }
}

