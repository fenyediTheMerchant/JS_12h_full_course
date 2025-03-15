// class = (ES6 feature) provides a more structured
// and cleaner way to work with objects compared to
// traditional constructor functions
// ex.: static keyword, encapsulation, inheritance

// Constructor ex.
// function Product(name, price){
//     this.name = name;
//     this.price = price;

//     this.displayProduct = function(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     };

//     this.calculateTotal = function(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    // function
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)} RON`);
    }

    displayTotal(salesTax){
        return this.price * (1 + salesTax);
    }
    
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.19;

const product1 = new Product("Hamburger", 38);
// Instead console log, we invoke the function
product1.displayProduct();
const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): ${total.toFixed(2)} RON`);

const product2 = new Product("Pizza", 24);
// Instead console log, we invoke the function
product2.displayProduct();
const total2 = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): ${total2.toFixed(2)} RON`);


const product3 = new Product("Bread", 3);
// Instead console log, we invoke the function
product3.displayProduct();
const total3 = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): ${total3.toFixed(2)} RON`);
