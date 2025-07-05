/* 
    Destructing => Extracting values from arrays and objects
                    then assigm them to variables in a
                    convenient way
            []  = to perfrom array destructing
            {}  = to perfrom object destructing
*/
//EXAMPLE 1 "SWAP THE VALUE OF TWO VARIABLES"
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);
console.log("");

//EXAMPLE 2 "SWAP 2 ELEMENTS IN AN ARRAY"
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);
console.log("");

//EXAMPLE 3 "ASSIGN ARRAY ELEMENTS TO VARIABLES"
const colors1 = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors1;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
console.log("");

//EXAMPLE 4 "EXTRACT VALUES FROM OBJECT"
const person1 = {
  firstName: "Ivan",
  lastName: "Lizardo",
  age: 21,
  job: "FEU TECH STUDENT",
};
const person2 = {
  firstName: "Nathaniel",
  lastName: "Lizardo",
  age: 19,
};

const { firstName, lastName, age, job = "unemployed" } = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
console.log("");

//EXAMPLE 5 "DESTRUCTURE IN FUNCTION PARAMETERS"
function displayPerson({ firstName, lastName, age, job = "unemployed" }) {
  console.log(
    `name: ${firstName} ${lastName} is ${age} years old. He is a ${job}`
  );
}

displayPerson(person2);
