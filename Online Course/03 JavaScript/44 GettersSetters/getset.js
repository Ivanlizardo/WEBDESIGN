// getters => makes a property readable
// setters => makes a property writable
// validate and modify a value when reading/writing a property
// input validation
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth; // "_" private property
    } else {
      console.error("Width must be a positive number");
    }
  }

  get width() {
    return this._width.toFixed(1);
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight; // "_" private property
    } else {
      console.error("Height must be a positive number");
    }
  }

  get height() {
    return this._height.toFixed(1);
  }

  //---------------//
  get area() {
    return (this._width * this._height).toFixed(1);
  }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
console.log("");

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else if (newFirstName.length <= 0) {
      console.error("First name must be a non-empty string");
    } else {
      console.error("First name must be a string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else if (newLastName.length <= 0) {
      console.error("Last name must be a non-empty string");
    } else {
      console.error("Last name must be a string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a number");
    }
  }

  get firstName() {
    return (
      this._firstName.charAt(0).toUpperCase() +
      this._firstName.slice(1).toLowerCase()
    );
  }
  get lastName() {
    return (
      this._lastName.charAt(0).toUpperCase() +
      this._lastName.slice(1).toLowerCase()
    );
  }
  get age() {
    return this._age;
  }

  get fullName() {
    return (
      this._firstName.charAt(0).toUpperCase() +
      this._firstName.slice(1).toLowerCase() +
      " " +
      (this._lastName.charAt(0).toUpperCase() +
        this._lastName.slice(1).toLowerCase())
    );
  }
}

const person = new Person("Ivan", "lizardO", 12);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);
