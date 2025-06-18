const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

console.log("");
console.log("");

const student = ["sponegbob", "patrick", "squidward", "sandy"];
const uppercaseStudents = student.map(uppercase);

console.log(uppercaseStudents);

function uppercase(element) {
  return element.charAt(0).toUpperCase() + element.slice(1);
}

console.log("");
console.log("");

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formatedDates = dates.map(formatDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

console.log(formatedDates);

console.log("");
console.log("");

const fullName = [
  "ivan mark lizardo",
  "ken anthonie bautista",
  "nathaniel adrian lizardo",
];

const formatedNames = fullName.map(formatNames);

function formatNames(element) {
  const nameParts = element.split(" ");
  return `${nameParts[2].charAt(0).toUpperCase() + nameParts[2].slice(1)}, ${
    nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1)
  } ${nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1)}`;
}

console.log(formatedNames);

//babaguhin talaga format