// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    // Number(display.value) === 0 ? display.value = input : display.value += input; 
    display.value = Number(display.value) === 0 ? input : display.value + input;
}

function clearDisplay(){
    display.value = 0;
}

function calculate(){
    // eval() in this case NEVER EVER use this in real life!
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR!";
        console.error(error);
    }
}