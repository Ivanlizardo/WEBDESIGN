let age = 0;
let message = age >= 18 ? "You're and adult" : "You're a minor";
console.log(message);

//-------------------------//

let time = 16;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting);

//-------------------------//

let isStudent = true;
let greetingStudent = isStudent ? "You are a student!" : "You are not student!";
console.log(greetingStudent);

//-------------------------//

let purchase = 121;
let discount = purchase > 120 ? 10 : 0;
console.log(`Your prize is ${purchase - purchase * (discount / 100)}`);
