//spread    = "expand" (put values OUT into a new array or object)
//rest      = "gather" (take values IN as a group)

function openFridge(...foods) {
  foods.sort();
  console.log(...foods);
}

function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hatdog";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log("");
console.log(foods);
console.log("");
console.log("");

console.log("SUM");
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log(`Your total : ${total}`);

console.log("");
console.log("");

console.log("Average");
function sum1(...numbers1) {
  let result = 0;
  for (let number of numbers1) {
    result += number;
  }
  return result / numbers1.length;
}

const total1 = sum1(1, 2, 3, 4, 5);
console.log(`Your total : ${total1}`);

console.log("");
console.log("");
console.log("String");

function combineString(...strings) {
  return strings.join(" ");
}

const fullName = combineString("Mr", "Spongebob", "Squarepants", "III");

console.log(fullName);
