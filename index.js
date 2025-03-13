// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

// PI = 23 INVALID

// radius = window.prompt("Enter the radius of a circle:");

document.getElementById("mySubmit").onclick = function(){
    radius = Number(document.getElementById("myText").value);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
    console.log(circumference);
}