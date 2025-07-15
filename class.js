const ram = {
  name: "Ram",
  add: "",
  age: "",
  speak() {
    console.log(this);
  },
};

const hari = {
  name: "hari",
  add: "",
  age: "",
  speak() {
    console.log(this);
  },
};

const milk = {
  name: "Milk",
  price: 100,
  mfg: "2025/7/14",
};

class Product {
  name;
  price;
  mfg;
  producedBy;

  constructor(name, price, mfg, producedBy) {
    this.name = name;
    this.price = price;
    this.mfg = mfg;
    this.producedBy = producedBy;
  }
}

const milk1 = new Product("Milk", 100, "2025/7/14", "abc");
const waterBottle = new Product("Water Bottle", 100, "2024/7/14", "xyz");

// console.log(milk)
// console.log(milk1)
// console.log(waterBottle.producedBy)

// person class

class Person {
  #first_name;
  #last_name;
  constructor(first_name, last_name, age, phone) {
    this.#first_name = first_name;
    this.#last_name = last_name;
    this.age = age;
    this.phone = phone;
  }

  getFullName() {
    // console.log(this)
    return `${this.#first_name} ${this.#last_name}`;
  }
}

const user = new Person("Ram", "Gurung", 30, "9876565465");

// console.log(user)
// console.log(user.getFullName());

// student
// first_name lastname age phone , section faculty roll_no

class Student extends Person {
  constructor(first_name, last_name, age, phone, faculty, section, roll_no) {
    super(first_name, last_name, age, phone);
    this.faculty = faculty;
    this.section = section;
    this.roll_no = roll_no;
  }
}

const student = new Student("Ram", "Gurung", 30, "9876565465", "BCT", "A", 65);

// console.log(student);

// Account(private initial_amount, account_holder_name)
// deposit , withdraw , get_balance , get_details <- methods
//

class Account {
  #balance;

  constructor(account_holder_name, initial_amount) {
    this.account_holder_name = account_holder_name;
    this.#balance = initial_amount;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Amount must be grater than 0");
      return;
    }

    this.#balance += amount;
    console.log(`Your current balance is ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient Balalnce");
      return;
    }

    if (amount <= 0) {
      console.log("withdraw amount must me grater than 0");
      return;
    }

    this.#balance -= amount;
    console.log(`Your current balance is ${this.#balance}`);
  }

  //   getbalance

  getBalance() {
    console.log(`Your current balance is ${this.#balance}`);
  }

  // getDetails
}

const abc_account = new Account("abc", 1000);

// console.log(abc_account);
// abc_account.getBalance();
// abc_account.withdraw(500);
// abc_account.getBalance();
// abc_account.deposit(100);

// methods
// * constructor()
// * normal method
// * private method

// * static methods

class MathUtils {
  static square(x) {
    return x * x;
  }

  static cube(x) {
    return x * x * x;
  }

  static add(x, y) {
    return x + y;
  }
}

// const math = new MathUtils();

console.log(MathUtils.add(10, 29));

//TODO: Design a Calculator class

// * getter / setter

class Circle {
  PI = 3.14;
  radius = 0;

  constructor(r) {
    this.radius = r;
  }

  get Area() {
    return this.PI * this.radius * this.radius;
  }

  set Radius(r) {
    this.radius = r;
  }
}

const circle = new Circle(10);
console.log(circle.Area);
circle.Radius = 20;
console.log(circle.Area);

