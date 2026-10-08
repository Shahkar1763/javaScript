// Array Method in js

const fruits = ["Mango","Orange","Grapes"];

console.log(fruits);
fruits.push("Banana","Apple");
console.log(fruits);

fruits.pop()

console.log(fruits);

fruits.unshift("WaterMelon","Gavava");
console.log(fruits);

fruits.shift()
console.log(fruits);

console.log(fruits.toString());

const pak_heros = ["Atif Aslam","Danish","feroz"];

const In_heros = ["salman","sharuk","Amir khan"];

// console.log (...pak_heros , ...In_heros)

let Heros = pak_heros.concat(In_heros);

console.log(Heros);

console.log(Heros.slice(1,5));

let num = [1,2,3,4,5,6,7,8]

num.splice(1,3,191,890);
console.log(num);

num.splice(1,0,101,102);
console.log(num);

num.splice(2,1);
console.log(num);

const Compaines =["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

Compaines.shift();
// console.log(Compaines);

Compaines.splice(2,0,"Ola");
// console.log(Compaines);

Compaines.push("Amazon");

console.log(Compaines);
