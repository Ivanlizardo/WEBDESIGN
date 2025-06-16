const myInput = document.getElementById("myInput");
const myFarenheit = document.getElementById("myFarenheit");
const myCelsius = document.getElementById("myCelsius");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

mySubmit.onclick = function () {
  if (myFarenheit.checked) {
    // to farenheit
    cel = Number(myInput.value);
    let far = cel * (9 / 5) + 32;
    result.textContent = far.toFixed(2);
  } else if (myCelsius.checked) {
    // to celsius
    far = Number(myInput.value);
    let cel = (5 / 9) * (far - 32);
    result.textContent = cel.toFixed(2);
  } else {
    result.textContent = "0.00";
  }
};
