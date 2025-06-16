const mySubmit = document.getElementById("mySubmit");
let myH1 = document.getElementById("myH1");

mySubmit.onclick = function () {
  let myText = document.getElementById("myText");
  myText = Number(myText.value);

  if (myText < 18) {
    myH1.textContent = "You are not allowed to drive!";
  } else {
    myH1.textContent = "You are allowed to drive!";
  }
};
