// Operators in js
// Operators are used to perform operations on variables and values.
// 1. Arithmetic Operators
let a = 10;
let b = 5;

console.log("a =",a , "b =",b);
console.log("a + b =", a + b); // 15
console.log("a - b =", a - b); // 5
console.log("a * b =", a * b); // 50
console.log("a / b =", a / b); // 2
console.log("a % b =", a % b); // 0   (remainder)
console.log("a ** b =", a ** b); // 100000 (10 to the power of 5)

a++;
console.log("a++ =", a); // 11
a--;
console.log("a-- =", a); // 10
// ++a;
console.log("++a =", a); // 11
--a;
console.log("--a =", a); // 10

// 2. Assignment Operators
let x = 10;
console.log("x =", x);
x= x +5;
console.log("x = x +5 =", x); // 15
x -= 3;
console.log("x -= 3 =", x); // 12
x *= 2;
console.log("x *= 2 =", x); // 24
x /= 4;
console.log("x /= 4 =", x); // 6
x %= 2;
console.log("x %= 2 =", x); // 0
x **= 3;
console.log("x **= 3 =", x); // 

// 3. Comparison Operators
let p = 10;
let q = 20;
console.log("p =", p, "q =", q);
console.log("p == q =", p == q); // false
console.log("p != q =", p != q); // true
console.log("p < q =", p < q); // true
console.log("p > q =", p > q); // false
console.log("p <= q =", p <= q); // true
console.log("p >= q =", p >= q); // false

// 4. Logical Operators
let isStudent = true;
let hasID = false;
console.log("isStudent =", isStudent, "hasID =", hasID);
console.log("isStudent && hasID =", isStudent && hasID); // false
console.log("isStudent || hasID =", isStudent || hasID); // true
console.log("!isStudent =", !isStudent); // false



