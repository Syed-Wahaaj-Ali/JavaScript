// Functions in JavaScript

// basic function
function sayHello() {
    console.log("Hello!");
}
sayHello();

// function with parameter
function greet(name) {
    console.log("Hi " + name);
}
greet("Ali");
greet("Ahmed");

// function with return value
function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log("Sum =", sum);

// function expression (store function in a variable)
const multiply = function (x, y) {
    return x * y;
};
console.log("Multiply =", multiply(4, 6));

// arrow function (short form)
const divide = (x, y) => x / y;
console.log("Divide =", divide(10, 2));

// default parameter
function greetUser(name = "Guest") {
    console.log("Welcome " + name);
}
greetUser("Ayaan");
greetUser();
