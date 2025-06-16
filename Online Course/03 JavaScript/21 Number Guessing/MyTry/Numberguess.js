const result = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");
const min = 1;
const max = 50;

const randomNum = Math.trunc(Math.random() * (max - min + 1)) + min;

const percent = Math.floor(randomNum * 0.7); // lower bound (rounded)
const percent1 = randomNum * 1.3; // upper bound (decimal, don't round!)

console.log("Random Number:", randomNum);
console.log("Close range:", percent, "to", percent1);

let attempts = 0;

submitBtn.onclick = function () {
  const textBox = document.getElementById("textBox").value;
  const inputNumber = Number(textBox);

  if (isNaN(inputNumber) || textBox.trim() === "") {
    result.textContent = "Invalid input. Please input a number.";
  } else if (inputNumber === randomNum) {
    result.textContent = `YOU WON! The number is ${randomNum}! ${attempts} attempts!`;
  } else if (inputNumber >= percent && inputNumber < randomNum) {
    result.textContent = `CLOSE! Higher`;
  } else if (inputNumber <= percent1 && inputNumber > randomNum) {
    result.textContent = `CLOSE! Lower`;
  } else if (inputNumber < percent) {
    result.textContent = `Try higher`;
  } else if (inputNumber > percent1) {
    result.textContent = `Try lower`;
  } else if (inputNumber < min || inputNumber > max) {
    result.textContent = "Invalid input! Out of range.";
  } else {
    result.textContent = `Try again`;
  }
  attempts++;
};
