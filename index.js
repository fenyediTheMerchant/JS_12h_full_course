// constructor = special method for defining the
// properties and methods of objects

// Instead of writing 3 seperate car objects
// we use constructor

// Constructor
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){
        console.log(`You are drive the ${this.model}`);
    }
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "Blue");
// etc...

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

car1.drive();
car2.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);