// let getProduct=async()=>{
//    let response= await fetch(`https://dummyjson.com/products`)
  
//       let data = await firstresponse.json()
//       console.log(data);
      
      
// }

// getProduct();

let CategotyListElement = document.querySelector("aside ul")

let productsElement = document.querySelector(".product")

let getProduct=(catSlug = ``)=>{
    let apiurl;
    if(catSlug == ``){
        apiurl = `https://dummyjson.com/products`;
    }
    else{
        apiurl = `https://dummyjson.com/products/category/${catSlug}`
    }
    fetch(apiurl)
    .then((res)=> res.json())
    .then((data)=>{
        let productList = ``
        data.products.forEach((item)=>{
            console.log(item)
           productList+=`   <div class="productItems">
                   

                 <img src="${item.thumbnail}">
                    
                    <div class="priceCost">
                        <b>${item.price}</b>
                        <button>Add to Cart</button>
                    </div>
                        <h3>${item.title}</h3>
                        </div> `
           
        })

        productsElement.innerHTML=productList;
        
    })
}
getProduct()

let getCategory=()=>{
fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then((data)=>{
   let catList = ``
   data.forEach(element => {
        catList+=`<li data-slug="${element.slug}">${element.name}</li> `
   });
   CategotyListElement.innerHTML=catList;
});
}

getCategory()

CategotyListElement.addEventListener("click",(e)=>{
   if(e.target.tagName === "LI"){
    CategotyListElement.querySelectorAll("li").forEach((item) => {
            item.classList.remove("active");
      });

        e.target.classList.add("active");
      let currentSlug = e.target.getAttribute("data-slug")
      getProduct(currentSlug);
   }
})

