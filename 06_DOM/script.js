
let inputPassword = document.querySelector("#password")
// console.log(inputPassword)

let btn = document.querySelector("#btn")
// console.log(btn);


function showpassword(){
   if(btn.innerHTML == "hide"){
      inputPassword.type = "text"
      btn.innerHTML = "show"
   }
   else{
    inputPassword.type = "password"
      btn.innerHTML = "hide"
   }
}

// btn.addEventListener("click",()=>{
//        if(btn.innerHTML == "hide"){
//       inputPassword.type = "text"
//       btn.innerHTML = "show"
//    }
//    else{
//     inputPassword.type = "password"
//       btn.innerHTML = "hide"
//    }

// })

btn.addEventListener("click", showpassword)
