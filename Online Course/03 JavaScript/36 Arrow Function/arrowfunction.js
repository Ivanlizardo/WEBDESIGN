// arrow function = consice way to write fucntion
//                  expression good for simple
//                  funtions that you use only once
//                  (parameters) => some code

function hello() {
  console.log("Sup nigga!");
}
hello();

const goodbye = function () {
  console.log("Bye nigga!");
};
goodbye();

//Arrow function
const laugh = () => console.log("HAHAHAHA");
laugh();

const greetings = (user) => console.log(`Good morning, ${user}`);
greetings("Ivan");

const num = [1, 2, 3, 4, 5, 6];
const square = num.map((element) => {
  return Math.pow(element, 2);
});
console.log(square);

setTimeout(() => console.log("Supsup"), 3000);

//map, filter, reduce
const numbers = [1, 2, 3, 4, 5, 6, 7];

const squares1 = numbers.map((element) => Math.pow(element, 2));
console.log(squares1);

const evenNum = numbers.filter((element) => element % 2 === 0);
console.log(evenNum);

const total = numbers.reduce((prev, next) => prev + next);
console.log(total);
