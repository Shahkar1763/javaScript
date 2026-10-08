// let myNums = [1,2,3,4,5,6,7,8,9,10]

// const value = myNums.forEach( (item) => {
//      console.log(item)
// })

// console.log(value)

let myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (item) => {
//     return item > 5;
// })

// console.log(newNums)

// const newNums = myNums.filter ((num) => num > 4 )

const newNums = [];
myNums.forEach ((nums) => {
 if(nums > 4){
    newNums.push(nums)
 }
})
 console.log(newNums)


const books = [
    {
        title : "Book one", genre : "friction" , publish : 1995, Edition : 2004
    },
    {
        title : "Book Two", genre : " Non_friction" , publish : 1885, Edition : 2002
    },
    {
        title : "Book Three", genre : "history" , publish : 2003, Edition : 2009
    },
    {
        title : "Book four", genre : "Science" , publish : 1998, Edition : 2012
    },
    {
        title : "Book five", genre : "history" , publish : 2004, Edition : 2014
    },
    {
        title : "Book six", genre : "Science" , publish : 2003, Edition : 2013
    },
];

let userBooks = books.filter((bk) => bk.genre === "history") 

 userBooks = books.filter ((bk) => {
    return bk.publish >= 1998 && bk.genre === "Science"
 })

console.log(userBooks)



let students = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 90 },
    { name: "Usman", marks: 38 }
];

let passedStudents = students.filter((student) => student.marks >= 50);

console.log(passedStudents);


let numbers = [10,11,12,13,14,15,16];

let OddNumbers = numbers.filter((nums)=>{
    return nums % 2 !== 0;
})

console.log(OddNumbers);


let names = ["Ali","Ahmed","Sara","Usman","Hamza"];


let logNames = names.filter((str) => str.length > 4)

console.log(logNames)


let products = [
    {name:"Mouse", price:500},
    {name:"Laptop", price:80000},
    {name:"Keyboard", price:900},
    {name:"Monitor", price:15000}
];

let lessCost = products.filter((cost) => cost.price <= 1000)

console.log(lessCost);



let users = [
    {name:"Sara", age:22},
    {name:"Shahkar", age:21},
    {name:"Ali", age:24},
    {name:"Sana", age:18},
    {name:"Saad", age:25}
];

let people = users.filter((user) => user.name.startsWith("S") && user.age >= 20)
console.log(people)