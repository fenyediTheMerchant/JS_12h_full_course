// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property
// Setter = "input validation"
// Getter = can return additional logic

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth 
        }
        else{
            console.log("Width must be positive number.");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight 
        }
        else{
            console.log("Height must be positive number.");
        }    
    }
    get width(){
        return `${this._width.toFixed(1)} cm`;
    }
    get height(){
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)} cm ^2`;
    }
}

// Wrong values can be solved with getters and setters
// const rectangle = new Rectangle(-10000, "pizza");
const rectangle = new Rectangle(3, 4);

rectangle.width = -1;
rectangle.height = -1;

console.log(rectangle.width, rectangle.height);
console.log(rectangle.area);

// Ex2.

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string"
            && newFirstName.length > 0
        ){
            this._firstName = newFirstName;
        }
        else{
            console.error("Fist name must be a non empty string");
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === "string"
            && newLastName.length > 0
        ){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non empty string");
        }
    }
    set age(newAge){
        if(typeof newAge === "number"
            && newAge >= 0
        ){
            this._age = newAge;
        }
        else{
            console.error("Age must be a positive num.");
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    get fullName(){
        return this._firstName + " " + this._lastName
    }
}

const person = new Person("Spongebob", "Squarepants", 65);

console.log(person.firstName, person.lastName, person.age);
console.log(person.fullName);