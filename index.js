// Async / Await

// Async = makes a function return a promise
// Await = makes an async function wait for a promise

// Allows you to write asynchronous code in a synchronous manner
// Async does not have resolve or reject parameters
// Everyting after Await is placed in an event queue

// Async keyword before function does not really work without await
// With async await we dont have to use .then() statements

function walkDog(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{

            const dogIsWalked = false;

            if(dogIsWalked){
                resolve(`You walked the dog🐕`);
            }
            else{
                reject(`You did not walked the dog!`);
            }

        },1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{

            const kitchenIsCleaned = true;

            if(kitchenIsCleaned){
                resolve(`You cleaned the kitchen🔪`);
            }
            else{
                reject(`You did not clean the kitchen!`);
            }
        },2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{

            const trashTakenOut = true;

            if(trashTakenOut){
                resolve(`You took out the trash🗑️`);
            }
            else{
                reject(`You did not take out the trash!`);
            }

        },500);
    });
}

// Insted of this
// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("Finish!")})
//          .catch(error => console.error(error));

// We use this
async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(cleanKitchenResult);

        console.log("All chores are finished");
    }
    catch(error){
        console.error(error);
    }

}

doChores();