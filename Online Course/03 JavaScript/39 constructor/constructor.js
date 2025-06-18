function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`You drive ${this.make}, ${this.model}`);
  };
}

const car1 = new Car("Ford", "Mustang", 1932, "Red");
const car2 = new Car("Nissa", "Skyline", 1932, "Blue");
const car3 = new Car("Lamborgini", "Aventador", 2004, "Black");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();
console.log("");

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();
console.log("");

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car2.drive();
console.log("");
