const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of the circle: ");
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log("The circumference of the circle is: " + circumference);

// The value of pi cannot be changed
// pi = 3.14; // This line would cause an error if uncommented

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myRadius").value;
  radius = Number(radius); // Type casting
  circumference = 2 * PI * radius;
  document.getElementById(
    "response"
  ).textContent = `The circumference of the circle is: ${circumference}`;
};

