// reduce() = reduce the elements of an array
//            to a single value

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(previous, next) {
  return previous + next;
}

// 5 + 30 -> 35 (new accumulator/previous)
// 35 + 10 -> 45 (new accumulator/previous)
// so on
console.log("");
console.log("");

const grades = [75, 50, 90, 65, 95];
const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

//Math.max(75, 50); -> return 75
//Math.max(75, 90); -> return 90
//Math.max(90, 65); -> return 90
//Math.max(90, 95); -> return 95 "MAX"
