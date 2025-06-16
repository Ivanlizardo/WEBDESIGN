let age = 17;
let hasLicense = false;

if (age >= 18 && hasLicense) {
  console.log("You can drive!");
} else {
  if (age < 18 && hasLicense) {
    console.log("Must be 18+ to enter!");
  } else if (age >= 18 && !hasLicense) {
    console.log("Get a license first!");
  } else {
    console.log("Must be 18 and make sure to get a license!");
  }
}
