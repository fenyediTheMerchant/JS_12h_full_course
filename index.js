// Switch = Efficient replacement to many if statements

// let day = 5;
let testScore = 80;
let letterGrade;

switch(true){
    case testScore >=  90:
            letterGrade = "A";
            break;
    case testScore >=  80:
        letterGrade = "B";
        break;
    case testScore >=  70:
        letterGrade = "C";
        break;
    // etc...
    default:
        letterGrade = "F";
}

console.log(letterGrade);

// switch (day){
//     case 1:
//         console.log("Hetfo");
//         break;
//     case 2:
//         console.log("Kedd");
//         break;
//     case 3:
//         console.log("Szerda");
//         break;
//     case 4:
//         console.log("Csutortok");
//         break;
//     case 5:
//         console.log("Pentek");
//         break;
//     case 6:
//         console.log("Szombat");
//         break;
//     case 7:
//         console.log("Vasarnap");
//         break;
//     default:
//         console.log("Ez nem egy nap...");
//         break;
// }