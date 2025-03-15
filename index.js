// super = a keyword used in classes to call the
// constructor or acces the properites and methods of
// a parent ("super"-class)
// this = this object
// supe = the parent

// DRY Principle here too.
// Because every animal has a name and age, the parent
// class should construct these.

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("Rabbit", 1, 25);
const fish = new Fish("Fish", 2, 12);
const hawk = new Hawk("Hawk", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);