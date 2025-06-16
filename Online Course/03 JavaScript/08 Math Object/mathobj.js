// ============================
// Math Constants (Properties)
// ============================
console.log("Math.PI:", Math.PI); // π ≈ 3.14159
console.log("Math.E:", Math.E); // Euler's number ≈ 2.718
console.log("Math.LN2:", Math.LN2); // Natural log of 2 ≈ 0.693

// ============================
// Rounding / Absolute
// ============================
let num = 7.6;
console.log("Math.round(7.6):", Math.round(num)); // Rounds to nearest → 8
console.log("Math.floor(7.6):", Math.floor(num)); // Rounds down → 7
console.log("Math.ceil(7.6):", Math.ceil(num)); // Rounds up → 8
console.log("Math.trunc(7.6):", Math.trunc(num)); // Removes decimal → 7
console.log("Math.abs(-10):", Math.abs(-10)); // Absolute value → 10

// ============================
// Powers and Roots
// ============================
console.log("Math.pow(2, 4):", Math.pow(2, 4)); // 2^4 = 16
console.log("Math.sqrt(25):", Math.sqrt(25)); // Square root of 25 → 5
console.log("Math.cbrt(27):", Math.cbrt(27)); // Cube root of 27 → 3

// ============================
// Min / Max / Random
// ============================
console.log("Math.min(3, 7, -1, 9):", Math.min(3, 7, -1, 9)); // → -1
console.log("Math.max(3, 7, -1, 9):", Math.max(3, 7, -1, 9)); // → 9
console.log("Math.random():", Math.random()); // Random float [0, 1)

let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random integer 1–10:", random1to10); // Random integer 1–10

// ============================
// Trigonometry (Advanced Math)
// ============================
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // sin(90°) → 1
console.log("Math.cos(0):", Math.cos(0)); // cos(0°) → 1
console.log("Math.tan(1):", Math.tan(1)); // tan(1 rad)
console.log("Math.log(1):", Math.log(1)); // ln(1) → 0
console.log("Math.exp(1):", Math.exp(1)); // e^1 ≈ 2.718
