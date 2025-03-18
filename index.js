// Promise = An Object that manages asynchronous operations.
// Wrap a Promise Object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED

// new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER
// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

// With callback hell
// function walkDog(callback){
//     setTimeout(() =>{
//         console.log(`You walked the dog🐕`);
//         callback();
//     },1500)
// }

// function cleanKitchen(callback){
//     setTimeout(() =>{
//         console.log(`You cleaned the kitchen🔪`);
//         callback();
//     },2500)
// }

// function takeOutTrash(callback){
//     setTimeout(() =>{
//         console.log(`You took out the trash🗑️`);
//         callback()
//     },500)
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("You finished all the chores"))
//     })
// });

// We can use promises instead, we method chain our promises
// At every function we have to return an object to make promise compatible
// With Promises

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

            const trashTakenOut = false;

            if(trashTakenOut){
                resolve(`You took out the trash🗑️`);
            }
            else{
                reject(`You did not take out the trash!`);
            }

        },500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("Finish!")})
         .catch(error => console.error(error));

// Same as
// walkDog()
//     .then((fulfilledValue, rejectedValue) => {
//         console.log(fulfilledValue);
//         return cleanKitchen();
//     })
//     .then((fulfilledValue, rejectedValue) => {
//         console.log(fulfilledValue);
//         return takeOutTrash();
//     })
//     .then((fulfilledValue, rejectedValue) => {
//         console.log(fulfilledValue);
//         console.log("Finish!");
//     })
//     .catch(error => console.error(error));