// static = keyword that defines properties or methods
// that belong to a class itself rather than the objects
// created from that class
// (class own anything static, not the objects)

class MathUtil{
    static PI = 3.14159;
    
    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

const MathUtil1 = new MathUtil();

// Works
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));
// Doesnt work
console.log(MathUtil1.PI);


// Example 2

class User{
    // Store how many users are created
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} nr. of user online.`);
    }

    sayHello(){
        console.log(`Hello my name is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(user1.username, User.userCount);
console.log(user2.username, User.userCount);
console.log(user3.username, User.userCount);
user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();