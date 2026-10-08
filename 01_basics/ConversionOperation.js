//Conversion of Datatypes

//string into Number
let name = "Shahkar";

console.log(typeof name);
console.log(typeof(name));

let stringInNumber = Number(name)
console.log(stringInNumber);
console.log(typeof stringInNumber);

/*"33" => 33
"33abc" => NaN => Not a  Number => But type give a number
"Shahkar" => NaN => Not a  Number => But type give a number

string is not convert to Number.

null => 0
undefined => NaN
True => 1 => false => 0.
*/

let islogggedIn = 1;
let BooleanisLoggedIn = Boolean(islogggedIn);
 console.log(BooleanisLoggedIn);
 console.log(typeof BooleanisLoggedIn);

 /*  1 => true : 0 => false
     "hello" => true
     ""  => false
     30  => true
     undefined => false
 */

// Number In string

let number = 33;

let numberInString = String(number);
console.log(numberInString);
console.log(typeof numberInString);


 
 


