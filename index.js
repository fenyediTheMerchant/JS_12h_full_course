// Example 1 <h1> -----------

// Step 1. Create the element
const newH1 = document.createElement("h1");

// Step 2. Add attributes/properties
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// Step 3. Append element to DOM
// document.body.append(newH1); 
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);

// const box3 = document.getElementById("box3");
// document.body.insertBefore(newH1, box3);

// Without getElementById
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3]);

// Remove HTML Element
document.getElementById("box1").removeChild(newH1);