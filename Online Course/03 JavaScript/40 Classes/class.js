class Products {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Products("Shirt", 19.99);
const product2 = new Products("Pants", 15.99);
const product3 = new Products("Jacket", 100.0);

product1.displayProduct();
console.log("");
product2.displayProduct();
console.log("");
product3.displayProduct();
console.log("");
console.log("");

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);

const total1 = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total1.toFixed(2)}`);

const total2 = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total2.toFixed(2)}`);
