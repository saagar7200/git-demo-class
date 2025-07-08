// control flow

// control statements

// conditional  blocks
// decision making

// if (age > 17) {
//   console.log("you are adult");
// } else {
//   console.log("you are minor");
// }

// else if
// const age = 99;

// if (age <= 17) {
//   console.log("you are minor");
// } else if (age > 17 && age <= 30) {
//   console.log("you are adult");
// } else if (age > 30 && age < 60) {
//   console.log("you are senior");
// } else {
//   console.log("major");
// }


// switch
// if codition based on one variable

const day = 1

switch (day) {
  case 1:
  case 7: {
    console.log("weekend");
    break;
  }
  case 2:
  case 3:
  case 4:
  case 5:
  case 6: {
    console.log("work day");
    break;
  }

  default: {
    console.log("enter valid day between 1-7");
  }
}

// // ternary operator

// const age = 31;

// const result =
//   age <= 17 ? "children" : age > 17 && age <= 30 ? "adult" : "you are senior";

// console.log(result);

// loops

// for loop

// break continue retrun
// for(let x = 0 ; x <=10 ; x++){

//   if(x % 2 !== 0){
//     continue;
//   }
//   console.log(x)
// }

// while loop

// let x = 0
// while( x < 10){
//   if(x === 5){
//     x++
//     continue;
//   }
//   console.log(x)
//   x++
// }

// do{

//   console.log('do while',x)

//   x++

// }while(x < 10)

const numbers = [34, 34, 56, 7, 8, 89];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for of

for (value of numbers) {
  console.log(value);
}

// for(value of 'loop'){
//   console.log(value)
// }

// for in
// objects

// const person = {
//   name: "abc",
//   age: 20,
// };

// for (key in person) {
//   console.log(person[key]);
// }

// for (key in numbers) {
//   console.log(numbers[key]);
// }


