const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const cardResult = document.getElementById("cardResult");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = "You are subscribe!";
  } else {
    subResult.textContent = "You are not subscribe!";
  }

  if (visaBtn.checked) {
    cardResult.textContent = "You picked Visa!";
  } else if (mastercardBtn.checked) {
    cardResult.textContent = "You picked Mastercard!";
  } else if (paypalBtn.checked) {
    cardResult.textContent = "You picked Paypal!";
  } else {
    cardResult.textContent = "You dont't pick a card!";
  }
};
