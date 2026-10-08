
// for of loop
let arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const str = ("hello words")

for (const value of str) { 
    
    // console.log(`Each char is ${value}`)
}

// Maps

const map = new Map();

map.set("pak","pakistan")
map.set("IN", "India")
map.set("fr", "france")

console.log(map);

for (const [key, value] of map) {
    console.log(key ,":-", value)
}


// const programming = {
//     py : "python",
//     cpp : "c++",
//     jv : "javaScript"
// }

// for (const key of programming) {
//     console.log(key)
// }

let names = ["Ali", "Ahmed", "Usman", "Sara"];
for(let name of names){
    console.log(`The name of the student is : ${name}`);
}

let marks = [80, 75, 90, 85];
let sum=0;
for(let Total of marks){
    sum= sum+Total;
    
}
console.log(sum)


