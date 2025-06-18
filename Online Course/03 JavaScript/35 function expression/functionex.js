// function declaration
// function hello() {
//   console.log("Hello");
// }

// functio expression

setTimeout(function () {
  console.log("Hello");
}, 3000);

console.log("");
console.log("");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

console.log(squares);
//-------SAME WITH THIS (Remove name)-------
// function square(element){
//   return Math.pow(element, 2);
// }

const evenNum = numbers.filter(function (element) {
  return element % 2 === 0;
});
console.log(evenNum);

const sumNum = numbers.reduce(function (prev, next) {
  return prev + next;
});
console.log("");
console.log("Sum :", sumNum);
