// forEach() is an array method used to execute a function once for each element in an array.

// Note: forEach() works only with arrays, not with plain objects

// Syntax
// array.forEach(function(item) {
//     // code
// });
// Using an Arrow Function (Modern JavaScript)

// array.forEach((item) => {
//     // code
// });





const coding = ["java","js" ,"c++" ,"python" ,"rypy"];

// coding.forEach( function (val,index) {
//   console.log(index, val);
// })

coding.forEach( (item) => {
console.log(item)
})

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)


coding.forEach( (item , index , arr) => {
console.log(index,item,arr)
})


const myCodng = [
    {  
        languageName : "JavaScript",
        languagefileName : "js"
},

 {  
        languageName : "java",
        languagefileName : "java"
}
,

 {  
        languageName : "python",
        languagefileName : "py"
}
];

myCodng.forEach((item , index)=>{
    console.log(item.languageName)

})

