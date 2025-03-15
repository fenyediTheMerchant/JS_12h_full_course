// object = A collection of related properties 
// and/or methods (=function that belongs to an object)

// Can represent real world objects (people, products, places)
// object = {key:value,
//           function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){
        console.log(`Hi! I am ${this.firstName}!`)
    },
    eat: function(){
        console.log(`I am eating a Krabby Patty`)
    },
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => 
        console.log(`Hi! I am Patrick!`),
    eat: () =>
        console.log(`I am eating a Pizza`)
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();