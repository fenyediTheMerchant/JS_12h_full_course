// nested objects = objects inside of other objects.
// Allow you to represent more complex data structures
// Child object is enclosed by a Parent object

// Person{Adress{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124. Conch St.",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
// console.log(person.address.city);

for(const property in person.address){
    console.log(person.address[property]);
}

// New Ex. with classes

class Person{
    // rest parameter, store it within an array
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        // creating a new object within an object
        // object nodes will be the same as the new object constructor.
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country
    }
}

const person1 = new Person("Spongebob", 30, 
    "124 Concht st.", 
    "Bikini Bottom", 
    "Int. Wat");

console.log(person1);