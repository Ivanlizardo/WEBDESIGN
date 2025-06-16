// MANUAL METHOD
const fullName = "Ivan Lizardo";
let myH1 = document.getElementById("myH1");
let myH2 = document.getElementById("myH2");
let firstChar = document.getElementById("firstChar");
let lastChar = document.getElementById("lastChar");

let firstName = fullName.slice(0, 4);
let lastName = fullName.slice(4, 12);
let firstCharater = fullName.slice(0, 1);
let lastCharater = fullName.slice(-1);

myH1.textContent = firstName;
myH2.textContent = lastName;
firstChar.textContent = firstCharater;
lastChar.textContent = lastCharater;

// ALTERNATIVE => better way
let fullname_1 = "Nicole Manuel";
let alternativeFN = document.getElementById("alternativeFN");
let alternativeLN = document.getElementById("alternativeLN");

let altFN = fullname_1.slice(0, fullname_1.indexOf(" "));
let altLN = fullname_1.slice(fullname_1.indexOf(" "), fullname_1.length);

alternativeFN.textContent = altFN;
alternativeLN.textContent = altLN;
