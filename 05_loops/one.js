for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is the best number")
        continue;
    }
    console.log(element)
    
}


for (let i = 1; i <=10; i++) {

    // console.log(`value of i : ${i}`)
    // console.log(`The Table of ${i}`)
for (let j = 1; j <= 10; j++) {
    
    // console.log(`value of j : ${j} and value of ${i}`)

    // console.log(i ,"*", j ,"=", i*j);
}
    
    
}

const myArray = ["SHahkar","Aftab","Alyan","Shayan"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


for (let i = 0; i < 20; i++) {
    if(i %2 === 0){
        continue;
    }
    console.log(i)
}

// for (let i = 0; i < 20; i++) {
//     if(i === 5){
      
//         break;
    
//     }
//     console.log(i)
// }


// for(let i=10; i>=0; i--){
//     console.log(i)
// }


let sum =0;

for(let i=0; i<=10; i++){
    // sum+=i;
    if(i%2 !== 0){
        sum=sum + i;
    }
}
console.log(sum)


for(let i=1; i<=10; i++){
    console.log(`7 * ${i} = ${7 * i}`)
}


// let number = 9;

// for(let i=1; i<=10; i++){
//     console.log(`${number} * ${i} = ${number * i}`)
// }


for (let i = 1; i <= 10; i++) {
    console.log(`Cube of ${i} = ${i * i * i}`);
}

// for (let i = 1; i <= 10; i++) {
//     console.log(`Square of ${i} = ${i * i}`);
// }

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log(`Total even numbers = ${count}`);