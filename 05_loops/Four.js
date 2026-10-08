// for in loop

const programming = {
    py : "python",
    cpp : "c++",
    jv : "javaScript"
}

for (const key in programming) {
    console.log(`${key} is stand for ${programming[key]} `)
}


const programmings = ["jv","cpp","py","rb"]

for (const key in programmings) {
  
    
    console.log(`${key} of ${programmings[key]}`)
}


const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

for(let key in car){
    console.log(`${key} : ${car[key]}`)
}

const employee = {
    id: 101,
    name: "Shahkar",
    department: "IT"
};


for(let key in employee){
    console.log(`${key} : ${employee[key]}`)
}


let fruits = ["Apple", "Banana", "Mango"];

for(let index in fruits){
    console.log(`${index} : ${fruits[index]}`)
}