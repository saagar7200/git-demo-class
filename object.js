// ?

// const x = 10

// console.log(x)

// constructor / new keyword

// const person = new Object()

// object literal / object initializer {}

const product = {
  name: "Laptop",
  price: 12929,
  category: "Electronics",
  method() {
    console.log("this is product method", this);
  },
  getPrice() {
    return this.price;
  },
};

// * using object method
product.method();
console.log(product.getPrice());

// *accessing object properties

//? dot notation
const name = product.name;
// console.log(name)
// console.error(product.price)

//? bracket notation []
// console.log(product['name'])
// console.log(product['price'])

// ! dynamic key
const key = "price";
// console.log('key',product[key])

// * modifying object
product.price = 127867;
product["category"] = "abc";

// * adding new property
product.id = 1;
product["slug"] = "pr-1";

console.table(product);

// * removing property
delete product.slug;

console.table(product);

//
