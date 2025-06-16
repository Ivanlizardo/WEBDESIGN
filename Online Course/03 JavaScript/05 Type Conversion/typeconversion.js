// type conversion = change the type of a value
// 1. string to number
// 2. number to string
// 3. boolean to string etc.

// let age = window.prompt("What is your age?");

// age = Number(age); // Convert string to number
// age += 1;

// console.log(age, typeof age); // "21" (string)

let x = "Pizza";
let y = "Pizza";
let z = "Pizza";

x = Number(x); // Convert string to number
y = String(y); // Convert string to number
z = Boolean(z); // Convert string to boolean

console.log(x, typeof x); // NaN (Not a Number)
console.log(y, typeof y);
console.log(z, typeof z);
