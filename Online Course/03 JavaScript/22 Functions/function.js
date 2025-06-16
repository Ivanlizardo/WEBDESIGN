function happyBirhtday(name, age) {
  console.log("Happy birthday to you");
  console.log("Happy birthday to you 2x");
  console.log(`Happy birthday to you ${name}, you're ${age}!`);
  console.log("");
}

function add(x, y) {
  return x + y;
}

happyBirhtday("Ivan", 25);
happyBirhtday("Mark", 20);
happyBirhtday("Lizardo", 17);

function adding() {
  let result = add(4, 2);
  console.log(result);
}

adding();

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
