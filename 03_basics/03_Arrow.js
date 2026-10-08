const user = {
     username : "Shahkar",
     price : 999,

     WelcomeMassage : function(){
        console.log(`${this.username} welcome to website`)
        console.log(this)
     }
}

user.WelcomeMassage()
user.username = "sam";
user.WelcomeMassage()

console.log(this)


// function chai(){
//     let username = "Shahkar"
//     console.log(username)
// }
// chai();

// let chai = function(){
//      let username = "Shahkar"
//     console.log(this.username)
// }

// chai();


const chai = () => {
       let username = "Shahkar"
    console.log(this)
}

chai();

// const addTwo = (num1,num2) => {
// return num1 + num2;
// }
// console.log(addTwo(4,5));


// const addTwo = (num1 , num2 ) => num1 + num2;
// console.log(addTwo(4,5));

// const addTwo = (num1 , num2 ) => (num1 + num2);
// console.log(addTwo(4,5));


const addTwo = (num1 , num2 ) => ( {username : "Shahkar"});
console.log(addTwo(4,5));



const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isEven(8));
console.log(isEven(7));


const countWords = (str) =>{
    count = 1
 for (let words of str){
    if(words==" "){
       count++
    }
 }
 return count
}

let result = countWords("hello my name is shahkar");
console.log(result);


const factorial = (x) => {
    let fac = 1;

    for (let i = 1; i <= x; i++) {
        fac *= i;
    }

    return fac;
}

console.log(factorial(5));
