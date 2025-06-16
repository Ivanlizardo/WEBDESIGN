let username = window.prompt("Enter your username: ");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLocaleLowerCase();
username = letter + extraChars;

const myH1 = document.getElementById("myH1");
myH1.textContent = username;

//Method chaining

username = username.trim().charAt().toUpperCase() + username.trim().slice(1).toLocaleLowerCase();