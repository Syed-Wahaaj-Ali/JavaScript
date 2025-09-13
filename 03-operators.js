// Operators in JavaScript

// Arithmetic operators
let x = 10;
let y = 3;

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus (remainder):", x % y);
console.log("Exponent:", x ** y);

// Comparison operators
let a = 5;
let b = "5";

console.log("a == b:", a == b);   // true (values are equal, type not checked)
console.log("a === b:", a === b); // false (strict equality, type checked)
console.log("a != b:", a != b);   // false
console.log("a !== b:", a !== b); // true

console.log("a > 3:", a > 3);     // true
console.log("a < 3:", a < 3);     // false
console.log("a >= 5:", a >= 5);   // true
console.log("a <= 5:", a <= 5);   // true

// Logical operators
let p = true;
let q = false;

console.log("p && q:", p && q); // AND → false
console.log("p || q:", p || q); // OR  → true
console.log("!p:", !p);         // NOT → false
console.log("!q:", !q);         // NOT → true

// Assignment operators
let num = 10;

num += 5;  // num = num + 5
console.log("After += :", num);

num -= 3;  // num = num - 3
console.log("After -= :", num);

num *= 2;  // num = num * 2
console.log("After *= :", num);

num /= 4;  // num = num / 4
console.log("After /= :", num);

num %= 3;  // num = num % 3
console.log("After %= :", num);

num **= 2; // num = num ** 2
console.log("After **= :", num);
