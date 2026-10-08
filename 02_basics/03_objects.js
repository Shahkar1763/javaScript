// Onjects in js

const jsUser = {
    name : "Shahkar",
    "Full Name": "Shahkar Ahmed",
    age : 20,
    Email: "kshahkar40@gmail.com",
    isLoggedin: false,

    lastLoggedIndays : ["Monday","Saturaday"]

}

console.log(jsUser);
console.log(jsUser.name)
console.log(jsUser["Email"]);
console.log(jsUser["Full Name"]);

jsUser.Email = "kshahkar20@gmail.com";
console.log(jsUser.Email)

// Object.freeze(jsUser);

// jsUser.Email = "kshahkar10@gmail.com";
// console.log(jsUser.Email)
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello jsUser");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function  () {
    console.log (`hello jsUser I am ${this["Full Name"]}`);
}

console.log (jsUser.greetingTwo())

console.log(jsUser);