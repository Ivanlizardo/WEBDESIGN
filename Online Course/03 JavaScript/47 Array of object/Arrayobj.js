const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

console.log(fruits[2].name);

fruits.push({ name: "grapes", color: "purple", calories: 62 });

console.log(fruits[5].name);

//forEach
fruits.forEach((fruits) => console.log(fruits.name));

//map
const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);
const fruitCalorie = fruits.map((fruit) => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalorie);
console.log("");

//filter
const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);
console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);
console.log("");

//reduce
const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);
console.log(maxFruit);
console.log(minFruit);
