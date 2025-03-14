// string methods = allow you to manipulate and work with text (strings)

let userName = "Levix501  ";

console.log(userName.charAt(3));
console.log(userName.indexOf("e"));
console.log(userName.lastIndexOf("e"));
console.log(userName.length);
console.log(userName);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.startsWith(" "));
console.log(userName.endsWith(" "));
console.log(userName.includes("x"));

if(userName.startsWith(" ")){
    console.log("Your username can't start with an empty Space!")
}
else {
    console.log(userName);
}

// Phone number ex.

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15, "--");
phoneNumber = phoneNumber.padEnd(20, "--");

console.log(phoneNumber);