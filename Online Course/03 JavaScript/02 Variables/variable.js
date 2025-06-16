// Variables = a container for storing data values
// JavaScript has 3 types of variables: var, let, const
// var = old way of declaring variables, function scoped
// let = block scoped, can be reassigned
// const = block scoped, cannot be reassigned

let x = 123;
let age = 25;
let price = 19.99;

console.log(typeof x); // number
console.log(x); // 123
console.log(age); // 25
console.log(price); // 19.99
console.log(`The value of x is ${x} and age is ${age} and price is $${price}`); // The value of x is 123

//string

let firstName = "John";
let lastName = "Doe";

console.log(typeof firstName); // string
console.log(`${firstName} ${lastName} is ${age} years old.`); // John

// boolean
let checker = true;
let isActive = true;
console.log(`4 < 5 : ${checker}`); // boolean

let fullName = `${firstName} ${lastName}`;

document.getElementById("p1").textContent = `${fullName}`;
document.getElementById(
  "p2"
).textContent = `He is ${age} years old and the price is $${price}.`;
document.getElementById("p3").textContent = `Is he active? ${isActive}`;
