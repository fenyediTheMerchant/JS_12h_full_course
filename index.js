// Example 2 ol -----------

// Step 1. Create the element
const newListItem = document.createElement("li");

// Step 2. Add attributes/properties
newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// Step 3. Append element to DOM
// document.body.append(newListItem);
document.getElementById("fruits").prepend(newListItem);

// Insert between apple and orange
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

// Insert between apple and orange without id
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[4]);

// Remove HTML Element
document.getElementById("fruits").removeChild(newListItem);