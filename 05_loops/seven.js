const myNums = [1,2,3,4,5,6,7,8,9,10];

// let newNums = myNums.map((nums) => nums + 10 )

// console.log(newNums);


let numbers = [1, 2, 3, 4, 5];

let newNumber = numbers.map((nums)=>{
    return nums * 5;
})

console.log(newNumber);



let names = ["ALI", "AHMED", "SARA"];

let Lowernames = names.map((name)=> name.toLocaleLowerCase())

console.log(Lowernames);


let employees = [
    { name: "Ali", salary: 30000 },
    { name: "Sara", salary: 40000 }
];

let newSalary = employees.map((employee)=> employee.salary + 5000)

console.log(newSalary);


// chaining
let newNums = myNums 
                 .map((nums) => {
                    return nums * 10
                })
                 .map((nums) => nums + 1)
                 .filter((nums)=>nums > 40)

console.log(newNums)

let nums = [1,2,3,4,5];

// const numsTotal = nums.reduce( function (accmulator, currentVal){

//     console.log(`Acc value is ${accmulator} and CurrentValue is ${currentVal}`)

//     return accmulator + currentVal
// }, 0)
// console.log(numsTotal)

const myTotal = nums.reduce((acc,currVal) => acc + currVal,0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "python",
        price : 2999
    },
    {
        itemName : "js Course",
        price : 999
    },
    {
        itemName : "web Course",
        price : 7999
    },
    {
        itemName : "Data Science",
        price : 12999
    },

];

const priceToPay = shoppingCart.reduce((acc,item)  => acc +  item.price,0)

console.log(priceToPay)


let Values= [5, 10, 15, 40< 60,90];

let sum = Values.reduce((acc,num)=> {
    return acc + num
},0);

console.log(sum)


// let num = [2, 3, 5];

// let products = num.reduce((acc,product)=>{
// return acc * product
// },1)

// console.log(products);


let num = [10, 45, 20, 90, 35];

let largestNum = num.reduce((acc,max)=>{
    return acc > max ? acc : max;
})

console.log(largestNum)



// let products = [
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1200 },
//     { name: "Monitor", price: 15000 }
// ];


// let totalPrice = products.reduce((acc,total)=>{
//     return acc + total.price;
// },0)

// console.log(totalPrice);



