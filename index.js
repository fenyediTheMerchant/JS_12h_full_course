// Error = An Object that is created to represent a
// problem that occours.

// It is often used with user input or establishing a 
// connection, as it is expected that the user my give
// wrong values, or the connection cant be established

// Ex. NETWORK ERRORS, PROMISE REJECTION, SECURITY ERROR

// Without error handling
// console.log(x);
// console.log("You have reached the end!");

// We can handle them with
// try{} = Encloses code that might potentially cause an error
// catch{} = Catch and handle any thrown Errors from try{}
// finally{} = (optional) Always executes. Used mostly for
// cleanup ex. close files, close connections, release resources

// With error handling

try{
    console.log("Hi");
}
catch(error){
    console.error(error);
}
finally{
    console.log("This always executes");
}1
console.log("You have reached the end!");


// Ex. User input
// Withot trycatch this is dangerous because 1/0 = infinity
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    
    // We can intentionally make an error object
    if(divisor == 0){
        // We make a new error object
        throw new Error("You can't divide by 0");
    }
    if(isNaN(dividend) || isNaN(dividend)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log("You have reached the end!");