// .filter = creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);

console.log(evenNums);

function isEven(element) {
  return element % 2 === 0;
}

console.log("");
console.log("");

const ages = [16, 17, 18, 19, 20, 60, 72, 3, 18, 20];
let allowedAges = ages.filter(allowedAge);

console.log(allowedAges);

function allowedAge(element) {
  return element >= 18 && element <= 59;
}

console.log("");
console.log("");

const words = ["apple", "orange", "banana", "kiwi", "palmagranete", "coconut"];
let allowedWords = words.filter(allowedWord);

function allowedWord(element) {
  return element.length > 5;
}

console.log(allowedWords);
