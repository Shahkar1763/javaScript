// const user = {
//     username : "shahkar",
//     logginCount : 12,
//     isLoggedIn : true,

//      getUserDetailes : function(){
//         console.log("Get user daetails from DataBase")
//         console.log(`username : ${this.username}`)
//         console.log(this)
//     }
// }

// console.log(user)
// console.log(user["username"])
// console.log(user.getUserDetailes())

function User (username , logginCount, isLoggedIn){
    this.username = username;
    this.logginCount = logginCount;
    this.isLoggedIn = isLoggedIn;
    return this
}

const userOne = new User("shahkar",8,true)
const usertwo = new User("cahiourcode",10,false)
console.log(usertwo)




