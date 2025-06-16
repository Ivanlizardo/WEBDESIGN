// min yung 1
const rollBtn = document.getElementById("rollBtn");
const countLabel = document.getElementById("countLabel");
const resetBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submitBtn");
let min = 1; // default
let max = 10; // default

rollBtn.onclick = function () {
  let randomNum = Math.trunc(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  console.log(min);
  countLabel.textContent = randomNum;
};

resetBtn.onclick = function () {
  const defaultValue = "--";
  countLabel.textContent = defaultValue;
};

submitBtn.onclick = function () {
  let minValue = document.getElementById("minValue").value;
  let maxValue = document.getElementById("maxValue").value;
  min = Number(minValue);
  max = Number(maxValue);
};

// Notes

/* 
    => default value lagyan
    => pag nagbabago value wag gumamit ng const
    => type casting "Number(maxValue);"

*/
