// =            ->  assignment operator
// ==           ->  comparison operator
// ===          ->  strict equality operator(values + datatype)
// "!="         ->  inequality operator
// "!=="        ->  strict inequality operator

const myH1 = document.getElementById("myH1");
const PI = 3.14;

if (PI !== "3.14") {
  myH1.textContent = "This is PI";
} else {
  myH1.textContent = "This is NOT PI";
}
