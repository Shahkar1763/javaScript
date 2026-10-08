

// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123Abc"
tinderUser.email = "google@gmail.com"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    Email : "some@gmail.com",
    fullname :  {
        userFullname : {
            firstName : "Shahkar",
            lastName : "Ahmed"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstName);


const obj1 = {1: "a" ,  2: "b"}
const obj2 = {3: "c"  , 4: "d"}

// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign({} , obj1 , obj2)

const obj3 = {...obj1 , ...obj2}
console.log(obj3);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('email'));



