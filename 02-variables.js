// Variables in JavaScript

// var → old way (function scoped, can be redeclared)
var name = "Ali";
console.log("var example:", name);

// let → modern way (block scoped, cannot be redeclared in the same scope)
let age = 18;
console.log("let example:", age);

// const → constant value (cannot be reassigned)
const pi = 3.14159;
console.log("const example:", pi);


// variables practice

// var can be redeclared
var city = "Karachi";
var city = "Lahore";
console.log(city); // Lahore

// let cannot be redeclared in same block
let country = "Pakistan";
// let country = "India"; // error if uncommented
console.log(country);

// scope test
if (true) {
    var a = 10;   // var is not block scoped
    let b = 20;   // let is block scoped
    console.log("inside block:", a, b);
}

console.log("outside block var:", a);
// console.log("outside block let:", b); // error if uncommented

// const test
const gravity = 9.8;
// gravity = 10; // error if uncommented
console.log("gravity:", gravity);
