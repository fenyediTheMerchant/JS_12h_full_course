// JSON = (JavaScript Object Notation)
// Data interchange format used for exchanging data between a
// server and a web application.

// JSON files {key:value} or [value1, value2, value3]
// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object.


// Stringifing
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}

// console.log(names);

const jsonString = JSON.stringify(names);

// console.log(jsonString);

// console.log(person);

const jsonPersonString = JSON.stringify(person);

// console.log(jsonPersonString);

// Parsing
const namesString = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const personString = `{
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}`;

// console.log(namesString)
const pasredData = JSON.parse(namesString);
// console.log(pasredData)

// Fetching a JSON file.

fetch("./people.json")
    .then(response => response.json())
    .then(value => console.log(value));

// Iterating through
    fetch("./people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => {
        console.log(value.name)
    }))
    .catch(error => console.error);