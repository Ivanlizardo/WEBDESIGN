let userName = "Primo   ";

console.log(`Username : ${userName}`);
console.log("First letter :", userName.charAt(0)); //P
console.log("Index of (o) :", userName.indexOf("o")); //4
console.log("last Index of (o) :", userName.lastIndexOf("o")); //4
console.log("length : ", userName.length); //5 + 3 space

console.log("Trim :", userName.trim());
console.log("To upper :", userName.toUpperCase());
console.log("To lower :", userName.toLowerCase());
console.log("Repeat :", userName.repeat(3));
console.log("");

//startWith();
let tempName = " mike";
let result = tempName.startsWith(" ");
console.log(`Username : ${tempName}`);
if (result) {
  console.log("Your username can't begin withh ' '");
} else {
  console.log("Your username :", tempName);
}

//endsWith();
let tempName1 = " mike";
let result1 = tempName1.endsWith("e");
console.log(`Username : ${tempName1}`);
if (result1) {
  console.log("Your username can't begin withh 'e'");
} else {
  console.log("Your username :", tempName1);
}

//include();
let tempName2 = "mi ke";
let result2 = tempName2.includes("m");
console.log(`Username : ${tempName2}`);
if (result2) {
  console.log("Your username can't have 'm'");
} else {
  console.log("Your username :", tempName2);
}

//include();
console.log("");
let phonenumber = "123-456-7890";
console.log("Original number :", phonenumber); //removes "-"
phonenumber = phonenumber.replaceAll("-", " ");
console.log("Removed '-':", phonenumber);

//pad
let padStartPhonenumber = phonenumber.padStart(15, "0");
let padEndPhonenumber = phonenumber.padEnd(15, "0");

console.log("Pad start :", padStartPhonenumber);
console.log("Pad end :", padEndPhonenumber);
