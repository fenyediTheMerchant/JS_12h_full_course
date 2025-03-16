// DOM = Document Object Model
// An Object{} that represents the page you see in the web browser,
// and provides you an API to interact with it.

// Web Browser constructs the DOM when it loads an HTML document,
// and structures all the elements in a tree-like presentation.

// Javascript can access the DOM to dynamically change the content,
// structure, and style of a web page.

console.log(document);

console.dir(document);

document.body.style.backgroundColor = "hsl(233, 0%, 15%)";

document.title = "My website";

const username = "John Doe";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;