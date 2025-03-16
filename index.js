// eventListener = listen for specific events to create interactive
// web pages. Events: keydown, keyup
// document.addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;


document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        myBox.textContent = "‼️"
        myBox.style.backgroundColor = "blue";
        console.log(event.key);

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

document.addEventListener("keyup", event => {
    myBox.textContent = "✅"
    myBox.style.backgroundColor = "lightblue";
    console.log(`Key up = ${event.key}`);
});

