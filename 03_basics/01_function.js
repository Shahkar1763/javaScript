// Function


// function addTwoNumbers(num1 , num2) {
//     console.log( num1 + num2)
// }

// addTwoNumbers(3,4);

function addTwoNumbers(num1 , num2) {

    let result = num1 + num2;
    console.log("Shahkar Ahmed")
    return result;
    
}

// console.log(addTwoNumbers(4 , 7))

const Total = addTwoNumbers(4,7);
console.log(Total);



function  userLoggin(username ){

    // if(username === undefined){
    if(!username){
     console.log("please Enter username")
     return
    }

    return `${username} is just loggin`;


}

 console.log(userLoggin("Shahkar"));



 function calculateCardPrice(val1 , val2 , ...num1){
       return val1, val2;
 }
 console.log(calculateCardPrice(200,400,500,700,900));


 const User = {
     username : "shahkar",
     price : 299,

 }

 function handleObject(anyobject){
      
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
 }

//  handleObject(User);
handleObject({
    username : "sam",
    price: 399,
})


const myNewArray = [200,300,400,600,700]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));



function square(num){
    return num * num;
}
console.log(square(5));


function max(num1, num2){
     if(num1 > num2){
        return num1
     }
     else if (num1 < num2){
        return num2
     }
     else {
        return "both are equal"
     }
    
}

console.log(max(10,20))



function printNumber(){
    for(let i=0; i <= 10; i++){
        console.log(i)
    }
}
printNumber()


function Table(num){
 for(let i=0; i <= 10; i++){
    console.log(`${num} * ${i} = ${num * i}`)
 }
}
Table(5);

