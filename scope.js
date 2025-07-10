// //

// // 1. global scope
// var global_var = "global var"
// let global_let = "global let"
// const global_const = "global const"

//     // console.log('global scope')
//     // console.log(global_const)
//     // console.log(global_let)
//     // console.log(global_var)

// // local scope
// // 1.block scope (es6)

// if(true){

//     // var block_var = "block var"
//     // let block_let = "block let"
//     // const block_const = "block const"

//     // console.log('block scope')
//     //  console.log(block_const)
//     // console.log(block_let)
//     // console.log(block_var)

// }

// // {

// // }

// // function scope

// function scope () {
//     console.log('function scope')
//     var function_var = "function var"
//     let function_let = "function let"
//     const function_const = "function const"

//     if(true){
//         var block_var = "block var"
//         let block_let = "block let"
//         const block_const = "block const"
//         console.log('if block',function_let)

//         if(true){

//         }

//         //

//     }

//     console.log(function_const)
//     console.log(function_let)
//     console.log(block_let)

// }

// scope()

// console.log('global scope')
// // console.log(function_var)

// // lexical scope

// // module scope

// lexical scope (static)

  const lexical_var = 'global';


function parent() {
//   const lexical_var = [1, 2, 3, 4];

  console.log(lexical_var);

  function child() {

  const lexical_var = 'hello'

    console.log("child", lexical_var);
    // return 1
  }

  return child();
} 


const children = parent();
// const lexical_var = [1];

children()
