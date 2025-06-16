let username = "";

while (username === "") {
  username = window.prompt("Enter your name: ");
}

const myH1 = document.getElementById("myH1");
myH1.textContent = username;
