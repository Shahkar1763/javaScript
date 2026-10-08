// Condition in js
// Conditional statements are used to perform different actions based on different conditions.
// 1. if statement
// let age = 18;
// if (age >= 18) {
//     console.log("You are an adult.");
// }

let mode= "dark";
let color;
if (mode === "dark") {
    color = "white";
    console.log("Dark mode is enabled. Text color is set to", color);
}
else {
    color = "black";
    console.log("Dark mode is disabled. Text color is set to", color);
}
console.log("Current color:", color);

let number = 10;
if (number %2 === 0) {
    console.log(number, "is an even number.");
} else {
    console.log(number, "is an odd number.");
}

// 2. if...else statement
// let score = 85;
// if (score >= 90) {
//     console.log("Grade: A");
// } else {
//     console.log("Grade: B");
// }
// 3. if...else if...else statement
// let marks = 75;
// if (marks >= 90) {
//     console.log("Grade: A");
// } else if (marks >= 80) {
//     console.log("Grade: B");
// } else {
//     console.log("Grade: C");
// }

let num = prompt("enter a number");
if (num % 5 === 0) {
    console.log(num, " is divisible by 5.");
} else {
    console.log(num, "is not divisible by 5.");
}

let marks = prompt("Enter your marks");
if (marks >90 && marks <= 100) {
    console.log("Grade: A");
} else if (marks >= 70 && marks <= 89) {
    console.log("Grade: B");
} else if (marks >= 50 && marks <= 69) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Ternary operator
let age = 18;
age >= 18 ? console.log("You are an adult.") : console.log("You are a minor.");
// 4. switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
