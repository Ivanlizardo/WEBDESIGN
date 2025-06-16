// callback = a function that is passed as an argument
//            to another function.
//
// Used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases
//
// "Hey, when you're done, call this next."

function hello(callback) {
  console.log("Hello!");
  callback();
}

function leave() {
  console.log("Leave!");
}

function wait() {
  console.log("Wait!");
}

function goodbye() {
  console.log("Goodbye!");
}

hello(wait);

// DELAY
// setTimeout(function () {
//     console.log("Hello!");
//   }, 3000);
//   callback();

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

sum(displayConsole, 3, 4);
