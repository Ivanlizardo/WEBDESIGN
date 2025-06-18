// this = reference to the object

const person1 = {
  name: "spongebob",
  favFood: "Hamburger",
  sayHello: function () {
    console.log(`Hello! I'm ${this.name}`);
  },
};

const person2 = {
  name: "patrick",
  favFood: "Hamburger",
  sayHello: function () {
    console.log(`Hello! I'm ${this.name}`);
  },
};

person1.sayHello();
person2.sayHello();

// di gumagana sa arrow function
