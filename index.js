// ES6 Module = A module is an externel file that contains
// reusable code that can be imported into other JS files.

// Write reusable code for many different apps.
// Can contain variables, classes, functions... and more
// Introcued as part of ECMAScript 2015 update.

import {PI, getCircumference, getArea, getVolume} 
from './mathUtil.js';

console.log(PI);
console.log(getCircumference(10));
console.log(getArea(10));
console.log(getVolume(10));