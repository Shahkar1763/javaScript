// Imediately INvoked function Expression


// function DB(){
//     console.log("Database Connected")
// }
// DB();

//Syntax of IIFE

//(function defination)(function call)


(function DB(){
    console.log("Database Connected")
 })
 ();

 ( ourcode =(name)=> {
    console.log("Database Connected Two",name);
 })
("shahkar")


// function countvolwes(str){
// let count = 0;

// for(let char of str){
//     if(char === "a" || char ===  "e" || char === "i"|| char === "o" || char === "u"){
//         count++;
//     }
    
// }

// console.log(count)
// }
// countvolwes("shahkar");


const countVolwes = (str) => {
    let count = 0;

for(let char of str){
    if(char === "a" || char ===  "e" || char === "i"|| char === "o" || char === "u"){
        count++;
    }
    
}
console.log(count)
}

countVolwes("Zubair")





