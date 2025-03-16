// eventListener = Listen for specific events to create inter-
// active web pages.
// Events: click, mouseover, mouseout
// .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

function changeColor(event){
    console.log(event);
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH!! 🤠"
}

myButton.addEventListener("click", event => {
    console.log(event);
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH!! 🤠"
});

myButton.addEventListener("mouseover", event => {
    console.log(event);
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Hello!! 🤝"
});

myButton.addEventListener("mouseout", event => {
    console.log(event);
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Goodbye!! 🫡"
});

