// .reduce() = reduces the element of an array
// to a single value

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`${total.toFixed(2)} RON`);

function sum(accumulator, element){
    return accumulator + element;
}

// function sum(previous, next){
//     return previous + next;
// }

// previous 0 next 5
// previous 5 next 30
// previous 35 next 10
// previous 45 next 25...

const grades = [75, 50, 90 , 80, 65, 95];

const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

const minimum = grades.reduce(getMin);

console.log(minimum);

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}
