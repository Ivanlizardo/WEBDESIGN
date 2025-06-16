let fruits = ["apple", "banana", "orange", "coconot", "abanana"];
let fruitsSize = fruits.length; //check size
let index = fruits.indexOf("banana");

fruits.push("coconut"); //add to last
fruits.pop(); //delete last
fruits.unshift("Mango"); //add top
fruits.shift(); //delete top

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log("");
console.log("size : ", fruitsSize);
console.log("banana : index ->", index);
console.log("");

// for loop 1
for (let i = 0; i < fruitsSize; i++) {
  if (i === 1) {
    console.log("nigga");
    continue;
  }
  console.log(fruits[i]);
}

console.log("");
//reverse 2
for (let i = fruitsSize - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

console.log("");
//reverse but shortcut 3
for (let fruit of fruits) {
  console.log(fruit);
}

//sorted
// Be careful of capitalization
console.log("");
console.log("Sorted");
fruits.sort();
for (let i = 0; i < fruitsSize; i++) {
  console.log(fruits[i]);
}

//sorted reverse
// Be careful of capitalization
console.log("");
console.log("Sorted reverse");
fruits.sort().reverse();
for (let i = 0; i < fruitsSize; i++) {
  console.log(fruits[i]);
}
