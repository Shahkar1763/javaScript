//String in js
//string is a squence of character used to represent a text

let str = "Shahkar Ahmed";
console.log(str)
console.log(str.length);
console.log(str[0]);
console.log(str.charAt(3))
console.log(str.indexOf("h"))

let str1 = new String(str)

console.log(str1)

// Method in String

let gameName = "freeFire   ";

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.slice(0, 4));
console.log(gameName.trim());

let firstName = "shahkar";
let lastName = "Ahmed";

console.log(firstName.concat(lastName));

let url = "https//:shahkar40/shahkar-com";

console.log(url.replace("-", "."))

let name = "shahkar Ahmed";
let age = 20;

console.log(`hello my name is ${name} and i am ${age} years old`)




// let fullname = prompt("Enter a fullname without spacing");

// console.log("@"+fullname+fullname.length)
// console.log(`@${fullname}${fullname.length}`)
