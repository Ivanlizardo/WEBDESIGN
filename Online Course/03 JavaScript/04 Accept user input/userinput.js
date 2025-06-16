// 1. EASY way = window.prompt
// 2 PROFESSIONAL way = HTML form

// let userName = window.prompt("What is your name?");
// console.log(userName);

let userName;

document.getElementById("mySubmit").onclick = function () {
  userName = document.getElementById("userInput").value;
  console.log(userName);
  document.getElementById("response").textContent = `Hello, ${userName}!`
};
