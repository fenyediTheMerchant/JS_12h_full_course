// inheritence = allows a new class to inherit
// properties and methods from an existing class
// (parent -> child)
// It helps with code reusability

// DRY PRINCIPLE = DONT REPEAT YOURSELF!!!

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating...`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping...`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";
    run(){
        console.log(`This ${this.name} is running...`);
    }
}
class Fish extends Animal{
    name = "Fish";
    swim(){
        console.log(`This ${this.name} is swimming...`);
    }
}
class Hawk extends Animal{
    name = "Hawk";
    fly(){
        console.log(`This ${this.name} is flying...`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// Chaning the property
// rabbit.alive = false;

console.log(rabbit.alive);
console.log(fish.alive);

rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();
fish.swim();

hawk.eat();
hawk.sleep();
hawk.fly();