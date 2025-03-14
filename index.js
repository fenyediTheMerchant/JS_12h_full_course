// Number guessing game!!

const minNum = 50;
const maxNum = 100;

const answerNum = 
Math.floor(Math.random() * 
(maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}:`)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number!");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number!");
    }
    else{
        attempts++;
        if(guess < answerNum){
            window.alert("Too Low! Try Again!");
        }
        else if(guess > answerNum){
            window.alert("Too High! Try Again!");
        }
        else{
            window.alert(`Correct!! The answer was ${answerNum}. It took you ${attempts} attempts.`);
            running = false;
        }
    }

    console.log(typeof guess , guess, answerNum);
}
