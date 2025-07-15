// // memory creation phase
// // execution phase

// // signle threaded
// // call stack

// // ADD

// //
// //
// //

// // start

// console.log("start");

// function sub (a,b) {
// console.log(a-b) //100
// }

// function add (a){
// var b  =10
// var sum = a + b

// sub(sum,b)
// console.log(sum) // 110
// }

// // add(10) //20
// // add(20) //30
// add(100) //110





// closure

// scope

function outer (a){
    // let a= 10
    function inner(b){
        // let b = 20
        let sum = a + b;
        console.log(sum)   
        
    }
   return inner
}

// closureA(add100)
// a:100

let add100 = outer(100)
console.log(add100)
add100(300)
add100(200)

let add500 = outer(500)

// Closure
// a:500

add500(300)
