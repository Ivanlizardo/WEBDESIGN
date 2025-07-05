class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}
class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log(`This ${this.name} is running`);
  }
  //sarili
}
class Fish extends Animal {
  name = "fish";
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
  //sarili
}
class Hawk extends Animal {
  name = "hawk";
  fly() {
    console.log(`This ${this.name} is flying`);
  }
  //sarili
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
fish.swim(); //sarili
console.log("");

console.log(fish.alive);
fish.eat();
fish.sleep();
rabbit.run(); //sarili
console.log("");

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly(); //sarili
console.log("");
