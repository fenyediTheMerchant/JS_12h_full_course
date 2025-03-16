// Closure = A function defined inside of another function.
// The inner function has access to the variables and scope
// of the outer function.

// Allow for private variables and state maintenance.
// Used freq. in JS frameworks: React, Vue, Angular

// Used in function based components.
// Advantage: Any varuiable in the outer closure considered private

function outer(){
    
    let message = "Hello";

    // Inner has access to everything from outer scope {}
    function inner(){
        console.log(message);
    }

    // We have to call the inner function from here
    inner();
}

message = "Goodbye";

// outer() enters the outer scope
outer();



// Ex. closure for maintaining the state for a variable

// This doesnt work as every calls resets the count variable
// The state is not maintained
// function increment(){
//     let count = 0;
//     count++;
//     console.log(`Count increased to ${count}`);
// }

// This basically hides, makes the count private, innaccasbile without a get method
function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    // Returning an object, with properties
    // Properties given here will be publicly available
    // return {increment:increment, getCount};   
    // This is better
    return {increment, getCount}

}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is: ${counter.getCount()}`);
console.log(counter);

// Last Ex. Closure for a game ----------------------------

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points} pts.`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points} pts.`);
    }
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}


// THIS IS BAD!! This should be not allowed

const game = createGame();

game.score = 100000000000;

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is: ${game.getScore()} pts.`);

