/*  Array :
  
           Array is a collection of multiple item in a single variables.
           JavaScript arrays are resizable and can contain a mix of different data types.
        JavaScript arrays are zero-indexed.

        Syntax:

const array_name = [item1, item2, ...];

        */



  const myArr = [1, 2, 3, 4, 5];

    // console.log(myArr) // [1, 2, 3, 4, 5]

    const cars = new Array("Saab", "Volvo", "BMW");

    // console.log(cars);

    // Changing an Array Element
    
      cars[0] = "Opel";
      // console.log(cars)

    // Accessing Array Elements

    const fruits = ["Apple", "Banana", "Cherry"];

    console.log(fruits);
    // console.log(fruits[0]); // Output: Apple
    // console.log(fruits[1]); // Output: Banana
    // console.log(fruits[2]); // Output: Cherry
    console.log(fruits.includes("mango"));
    console.log(fruits.indexOf("Apple"));

   // Accessing the Last Array Element

    console.log (fruits[fruits.length-1]);

    // Changing a Array Element into string
    let Myfruits = fruits.toString();
    console.log(Myfruits) // Apple,Banana,Cherry



    // Array Length

    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers.length); // Output: 5

    //loops in array

    const myNumbers = [10, 20, 30, 40, 50];

    for (let i = 0; i < myNumbers.length; i++) {
      console.log(myNumbers[i]);
    }

    const cites = ["peshawar","Nowshera","mardan","islamabad","lahore"];

    // for(let i=0;  i < cites.length; i++){
    //     console.log(cites[i]);
    // }

    // for of loop

    for (const city of cites) {
      console.log(city.toUpperCase());
    }

    // calculate the avarage of student marks 

    // const marks = [85, 90, 78, 92, 88];

    // let sum = 0;

    // for(let i=0; i < marks.length; i++){
    //     sum = sum + marks[i];
    // }

    // const avarage = sum/ marks.length;
    // console.log(`The Avarage marks of all student is ${avarage}`);

    // for of loop

    const marks = [85, 90, 78, 92, 88];

    let sum = 0;

    for (const mark of marks){
        sum += mark;
    }

     const avarage = sum/ marks.length;
    console.log(`The Avarage marks of all student is ${avarage}`);

    // 

    const items = [300,400,600,900,700]

    for(let value of items){
        let offer = value/10;
        let discountedPrice = value - offer;
        console.log(`The discounted price of item with original price ${value} is ${discountedPrice}`);
    }

    //

    let a = [1,2,3,4]

    let b = [3,4,5,6]

    for(let v of a){
      if(b.includes(v)){
        console.log(v)
      }
    }

    //

    let arrays = [1,2,2,3,3,4,4,5,5,6,6,7,7,8,9]

    let finalArray =[]

    for(let array of arrays){
      if(!finalArray.includes(array))
        finalArray.push(array)
    }
    console.log(finalArray);

    // let z = [1,22,55,99,102,108]

    // let max = z[0]

    // for (let x of z){
    //   if(x > max){
    //     max = x;
    //   }
      
    // }
    // console.log(max);

     let z = [1,22,55,99,102,108]

     let newArray = []

    for (const element of z) {
           newArray.unshift(element)
    }
           
    console.log(newArray)