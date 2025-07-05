/*
    Nested Objects = Objects inside of other Objects.

    ✅ Purpose:
        - Allows you to represent more complex data structures.
        - Child Object is enclosed by a Parent Object.

    ✅ Concept Examples:

        Person {
            Address {},
            ContactInfo {}
        }

        ShoppingCart {
            Keyboard {},
            Mouse {},
            Monitor {}
        }
*/

const person = {
  fullName: "Ivan",
  age: 20,
  isStudent: true,
  hobbies: ["karate", "cooking", "basketball"],
  address: {
    street: "Blk 10 Lot 9",
    city: "Caloocan City",
    country: "Philippines",
  },
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[1]);

for (const property in person.address) {
  console.log(person.address[property]);
}
console.log("");

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Nathaniel", 19, "124 st", "Caloocan City", "India");
const person2 = new Person("Jevin", 31, "128 st", "New York City", "USA");
const person3 = new Person(
  "Evan",
  60,
  "123 st nigga",
  "Toronto City",
  "Canada"
);

console.log(person1.address.city);
console.log("");

//shortcut
for (const i in person3.address) {
  console.log(person3.address[i]);
}
