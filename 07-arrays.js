// Arrays in JavaScript

// creating an array
let fruits = ["apple", "banana", "mango"];

// accessing elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]);

// array length
console.log("Number of fruits:", fruits.length);

// adding items
fruits.push("orange"); // add to end
console.log("After push:", fruits);

fruits.unshift("grapes"); // add to start
console.log("After unshift:", fruits);

// removing items
fruits.pop(); // remove last
console.log("After pop:", fruits);

fruits.shift(); // remove first
console.log("After shift:", fruits);

// changing value
fruits[1] = "peach";
console.log("After changing:", fruits);

// loop through array
for (let i = 0; i < fruits.length; i++) {
    console.log("for loop fruit:", fruits[i]);
}

for (let fruit of fruits) {
    console.log("for...of fruit:", fruit);
}
