// const promiseOne = new Promise( function(resolve , reject){
//     // Asyn Any Task
//     // DB Calls , cryptography , network CAlls

//     setTimeout(()=>{
//         console.log("asyn task is completed")
//         resolve()
//     },1000)
// })

// promiseOne.then(()=>{
//     console.log("Promise is Completed")
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task 2")
//         resolve()
//     } , 1000)
// }).then(()=>{
//     console.log("Task 2 is resolved")
// })


// const promiseThree = new Promise((resolve,reject) => {
//       setTimeout(()=>{
//         resolve({username: "Chai", emial: "chai@example.com",})
//       },1000)
// })

// promiseThree.then((user)=>{
//    console.log(user)
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"Shahkar", password:"Shahkar@1763"})
//         }
//         else{
//             reject("Error : Something Went wrong")
//         }
//     },1000)
// })

// promiseFour
// .then(function(user){
//     console.log(user)
//     return user.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch(function(error){
//    console.log(error)
// })
// .finally(() => console.log("The promise is ethier resolved or rejected"))



// let promises = new Promise((resolve,reject)=>{
    //      console.log("hello Promise")
    //      resolve();
    // resolve("hello promise")

//     let error = true;
//     if(!error){
//         resolve("hello promise");
//     }
//     else{
//         reject("Error! Something is wrong")
//     }
// })

// promises
// .then((massage)=>{
//     console.log(massage)
// })
// .catch((error)=>{
//     console.log(error);
// })



// let promise = new Promise((resolve, reject) => {
//     reject("Error! Something is wrong");
// });

// promise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Task is completed")
//     },2000)
// })
// promise.then((task)=>{
//     console.log(task)
// })


// let promise = new Promise((resolve,reject)=>{

//     let num = 4;
//     if(num % 2 === 0){
//         resolve("The number is even")
//     }
//     else{
//         reject("the number is odd")
//     }
// })

// promise.then((even)=>{
//     console.log(even)
// })
// .catch((odd)=>{
//     console.log(odd)
// })


// console.log("Start");

// new Promise((resolve) => {
//     console.log("Inside Promise");
//     resolve();
// })
// .then(() => {
//     console.log("Then");
// });

// console.log("End");

// const promiseFive = new Promise((resolve,reject)=>{
//      setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"javaScript", password:"1234"})
//         }
//         else{
//             reject("Error : js Went wrong")
//         }
//     },1000)
// })

//  async function consumedPromiseFive(){
// try {
//    const response =  await promiseFive
//       console.log(response)
// }
    
//  catch (error) {
//     console.log(error)
// }
//  }
// consumedPromiseFive()


// function login(username, password) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             if (username === "admin" && password === "12345") {
//                 resolve("Login Successful");
//             } else {
//                 reject("Invalid Username or Password");
//             }

//         }, 2000);

//     });
// }

// async function checkLogin() {

//     try {

//         let account = await login("admin", "12345");

//         console.log(account);

//     } catch (error) {

//         console.log(error);

//     }

// }

// checkLogin();

// async function getUser() {
//   try {
//     const response = await fetch("https://api.github.com/users/Shahkar1763");
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUser();

// fetch("https://api.github.com/users/Shahkar1763")
// .then((response)=>{
//       return  response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })
 



async function getposts() {
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")

    let data = await response.json()
    data.forEach((user)=>{
        console.log(user.title)
    })
    }
    catch(error){
        console.log(error)
    }
}
getposts();