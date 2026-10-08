//Dates in js

let myDate = new Date();

console.log(myDate.toString())

console.log(myDate.toLocaleDateString());

console.log(myDate.toDateString())

console.log(myDate.getDate())

console.log(myDate.getDay()+1)

console.log(myDate.getFullYear())
console.log(myDate.getMonth()+1)
console.log(myDate.getHours())
console.log(myDate.getMinutes())

console.log(typeof myDate)

const myCreatedDate = new Date(2026,2,15);
// const myCreatedDate = new Date(2026,2,15, 5,4);
console.log(myCreatedDate.toLocaleDateString())
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.toDateString())


// const newDate = new Date("2026-03-15");
const newDate = new Date("03/15/2026,9:24:00 pm");
console.log(newDate.toLocaleString())
console.log(newDate.toDateString())
