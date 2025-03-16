
const imgElement = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {

    if(imgElement.style.visibility === "hidden"){
        imgElement.style.visibility = "visible";
        myButton.textContent = "Hide!";
    }
    else{
        imgElement.style.visibility = "hidden";
        myButton.textContent = "Show!";
    }
});

console.log(imgElement);