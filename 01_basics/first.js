console.log("Apna Collage");

fullName = ("shahkar Ahmed")
console.log(fullName)

price = 29.8

x = null;

console.log(price);

const accountId = 12345;
let accountEmail = "Shahkar@gamil.com"
var accountPassword = 7890;
accountCity = "peshawar";


accountEmail = "Ahmed@gmail.com";
accountPassword= 13579;
accountCity = "Nowshera";


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity]);



let age = 25;

console.log(age);
console.log(typeof age);
console.log(typeof fullName)

const student = {
    fullName : "shahkar Ahmed",
     age : 20,
     cgpa: 3.5,
     isPass: true,
}

console.log(student)
// console.log(student.age)
console.log(student["age"])
// console.log(student.fullName)
console.log(student["fullName"])

student["age"] = student["age"] + 2;
console.log(student["age"]);

student["fullName"] = "shayan";
console.log(student["fullName"]);

student.cgpa = student.cgpa + .5;
console.log(student.cgpa)

// Q1 

const product = {
    title :  "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270,

}

console.log(product);
console.log(typeof product);

// Q2

const profile = {
    username : "itx__Shahkar22",
    following : 491,
    followers : 919,
    likes : 8302,
    Bio : "Cricket Lover Fav Team Pak",

};

console.log(profile);
console.log(typeof profile)
console.log(typeof profile["username"])

console.log(profile["username"])
console.log(profile["Bio"])
console.log(profile["followers"])
