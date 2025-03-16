// Date objects = 
// Objects that contain values that represent
// dates and times.
// These date objects can be changed and formatted

// Date(year, month, day, hour, minute, sec, ms)
// const date = new Date(2024, 0, 1, 2, 3, 4);
// const date = new Date("2024-01-02T12:00:00Z")
// const date =  new Date(1700000000000);

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
// Date! Not Day! Day is a week day.
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);

console.log(date);


// Comparing

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

(date2 > date1) ? console.log("Happy new year"):  console.log();
(date2 < date1) ? console.log("Happy new year"):  console.log();