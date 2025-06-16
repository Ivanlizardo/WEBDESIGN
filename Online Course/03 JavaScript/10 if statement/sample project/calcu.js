let clearBtn = document.getElementById("clearBtn");
let myH1 = document.getElementById("myH1");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let ans;

add.onclick = function () {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  num1 = Number(num1.value);
  num2 = Number(num2.value);
  ans = num1 + num2;
  myH1.textContent = ans;
};

sub.onclick = function () {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  num1 = Number(num1.value);
  num2 = Number(num2.value);
  ans = num1 - num2;
  myH1.textContent = ans;
};

mul.onclick = function () {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  num1 = Number(num1.value);
  num2 = Number(num2.value);
  ans = num1 * num2;
  myH1.textContent = ans;
};

div.onclick = function () {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  num1 = Number(num1.value);
  num2 = Number(num2.value);
  ans = num1 / num2;
  myH1.textContent = ans;
};

clearBtn.onclick = function () {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  myH1.textContent = "0";
};
