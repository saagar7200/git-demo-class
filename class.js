const ram = {
    name:'Ram',
    add:'',
    age:'',
    speak(){
        console.log(this)

    }
}

const hari = {
    name:'hari',
    add:'',
    age:'',
    speak(){
        console.log(this)

    }
}

const milk = {
    name:'Milk',
    price:100,
    mfg:'2025/7/14'
}

class  Product {
    name;
    price;
    mfg;
    producedBy;

    constructor(name,price,mfg,producedBy){
        this.name = name;
        this.price = price;
        this.mfg = mfg;
        this.producedBy = producedBy   
    }

}

const milk1 = new Product("Milk",100,'2025/7/14', 'abc');
const waterBottle = new Product("Water Bottle",100,'2024/7/14', 'xyz');

// console.log(milk)
// console.log(milk1)
// console.log(waterBottle.producedBy)

// person class

class Person {
    #first_name;
    #last_name;
    constructor(first_name,last_name,age,phone){
        this.#first_name = first_name;
        this.#last_name = last_name;
        this.age = age;
        this.phone = phone;
    }


    getFullName(){
        // console.log(this)
        return `${this.#first_name} ${this.#last_name}`
    }

}

const user = new Person('Ram','Gurung',30,'9876565465')


// console.log(user)
console.log(user.getFullName())


// student 
// first_name lastname age phone , section faculty roll_no


class Student extends Person{
     constructor(first_name,last_name,age,phone,faculty,section,roll_no){
        super(first_name,last_name,age,phone)
        this.faculty = faculty;
        this.section = section;
        this.roll_no = roll_no;

    }
}

const student = new Student('Ram','Gurung',30,'9876565465','BCT',"A",65)


console.log(student)



// Account(private initial_amount, account_holder_name)
// deposit , withdraw , get_balance , get_details <- methods
// 

