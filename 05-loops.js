// Loops in JavaScript

// for loop
for (let i = 1; i <= 5; i++) {
    console.log("for loop i =", i);
}

// while loop
let count = 1;
while (count <= 5) {
    console.log("while loop count =", count);
    count++;
}

// do...while loop
let num = 1;
do {
    console.log("do...while loop num =", num);
    num++;
} while (num <= 5);

// for...of loop (works with arrays, strings)
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log("for...of fruit =", fruit);
}

// for...in loop (works with objects)
let person = { name: "Ali", age: 20, city: "Karachi" };
for (let key in person) {
    console.log(key, "=", person[key]);
}
