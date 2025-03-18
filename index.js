// NodeList = Static collection of HTML elements by (id, class, element)
// Can be created by using querySelectorAll()
// Similar to an array, but no (map, filter, reduce)

// NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// ADD HTML/CSS PROPERTIES

buttons.forEach(button =>{
    button.style.backgroundColor = "green";
    button.textContent += "👍";
})

// ADD CLICK EVENT LISTENER

buttons.forEach(button => {
    button.isRed = false;
    button.addEventListener("click", event =>{
        if(button.isRed){
            event.target.style.backgroundColor = "green";
            button.isRed = false;
        }
        else{
            event.target.style.backgroundColor = "red";
            button.isRed = true;
        }
    });
})

// ADD MOUSEOVER AND OUT EVENT LISETENER
buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "lightgreen";
    })
})

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "green";
    })
})

// ADDING AN ELEMENT

// Step.1 Creating the element
const newButton = document.createElement("button"); 
// Step.2 Add properties
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
// Step.3 Adding it to the DOM
document.body.appendChild(newButton);

console.log(buttons);

// If we want to include the new button in the Nodelist we have to
// redeclare the buttons as it doesnt reflect the changes from the automatically
// DOM automaticaly

buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// REMOVE / HIDE AN ELEMENT UPPON CLICK

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        // event.target.style.visibility = "none"; 
        event.target.remove();
        // Here we update the nodelist based on the changed DOM
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})