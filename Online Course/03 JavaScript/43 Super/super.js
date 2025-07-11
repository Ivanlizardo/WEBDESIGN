// this -> this obj
// super -> the parent of that obj

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`This ${this.name} moves at a speed of ${speed}mph`);
  }
}
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }

  fly() {
    console.log(`This ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("Bugs Bunny", 1, 25);
const fish = new Fish("Fishy", 2, 12);
const hawk = new Hawk("Hawky", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();
console.log("");
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();
console.log("");
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();
console.log("");
