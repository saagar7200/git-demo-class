// // // non-primitive data types
// // // 0 indexed

// // // users
// // const user1 = {
// //   name: "",
// // };

// // const user2 = {};

// // // {}
// // // []

// // // syntax
// // // const numbers = [1, 45, 6, 45, 7, 49];
// // // length = 6 -> 7
// // // end index = 5 -> 6
// // // numbers -> 1ADed
// // // const newArrr = numbers

// // // const nums = new Array(); //[]
// // // console.log(numbers, nums);

// // // read/get data
// // //? get first element
// // // const firstEl = numbers[5];
// // // console.log(firstEl);

// // //?remove element
// // //! pop
// // // console.log(numbers);
// // // const ele = numbers.pop();
// // // console.log("pop", ele);

// // // const El = numbers.shift();

// // // console.log("shift", El);

// // //? add new element/s
// // // * end index
// // //! push
// // // numbers.push(22, 4, 56);
// // //* start index
// // //! unshift
// // // numbers.unshift(100, 345);

// // //! splice

// // // numbers.splice(startIndex,deleteCount,item1,item2....)

// // // console.log(numbers);

// // // const res = numbers.splice(1, 1, 100, 200);
// // // console.log("return", res);

// // //! slice
// // // const newArr = numbers.slice(1, 4);

// // // console.log(newArr.push(20));
// // // console.log(numbers);
// // // console.log(newArr);

// // //last el
// // // const lastEl = numbers[numbers.length - 1];
// // // console.log(lastEl);


// // // array methods
// // const numbers = [1, 45, 6, 45, 7, 49];

// // // basic
// // // indexOf

// // const index = numbers.indexOf(6)
// // console.log(index)

// // console.log(numbers.lastIndexOf(6))

// // // includes
// // console.log(numbers.includes(45))


// // // join
// // console.log(numbers.join('*'))

// // // loop throw array
// // // hof

// // // let square = []
// // // ! forEach
// // // const callback =(val,i)=>{

// // //   console.log(value,index)
// // //   square[index] = value * value
 
// // //   // return value
  
// // // }
 
// // // const result = numbers.forEach(callback)

// // // console.log(square)


// // //! map [] => []
// // // hof
// // // returns new array

// // // const callback =(val,i)=>{

// // //   console.log(val,i)
// // //   return 'x'

// // //   // return val * val 
// // // }


// // const mapRes = numbers.map(callback)

// // // console.log(mapRes)
// // // console.log(numbers)



// // // filter

// // const callback = (value,index) =>{

// //   if(value % 2 !== 0){
// //     return value
// //   }

// // }





// // const x = 10
// // const filtered =  numbers.filter(callback)

// // const filtered =  numbers.filter((value,index) => value % 2 === 0)

// // console.log(filtered)
// // console.log(numbers)



// // // const add = (a,b) =>  a + b


// // // console.log(add(12,12))


// // reduce
// // hof
// // 2 arguments [callback,initialvallue]
// // return single value
// // 
// // const sum =  numbers.reduce((acc,val,i,arr)=>{

// //   return acc + val
// // },100)


// // console.log('sum',sum)


// const stundents = [
//     {
//         name:'Alice',
//         marks:[27,34,56,78,90],
//         // avg_marks:,
//         grade:9
//     },
//     {
//         name:'Bob',
//         marks:[72,34,56,80,90],
//         grade:10
//     },
//     {
//         name:'Charlie',
//         marks:[72,43,65,80,90,56],
//         grade:11
//     }
// ]


// // marks -> avg_marks ->  map ->  reduce


// const withAvg = stundents.map((student)=>{

//     const avg = student.marks.reduce((acc,mark) => acc + mark , 0) / student.marks.length

//     student.avg_marks = parseFloat(avg.toPrecision(4))
//     student.status = avg > 50 ? 'Pass' : 'Failed'
    
//     return student

// })

// console.log(withAvg)

// // filter array -> avg_marks >  60  -> filter

// const filteredStudents = withAvg
// .filter(student => student.avg_marks >= 60 )

// console.log(filteredStudents)

// // ['name-avg_marks','Alice-60'] -> map

// const userName=null
// // temlate literal

// const greet = `Hello ${userName ? userName : 'Guest'}`

// console.log(greet)

// const result = filteredStudents.map(student =>{
//   return  `${student.name}-${student.grade}-${student.status}:-${student.avg_marks}`
// })

// console.log(result)


// const finalRes = stundents.map((student)=>{

//     const avg = student.marks.reduce((acc,mark) => acc + mark , 0) / student.marks.length

//     student.avg_marks = parseFloat(avg.toPrecision(4))
//     student.status = avg > 50 ? 'Pass' : 'Failed'
    
//     return student

// })
// .filter(student => student.avg_marks >= 60 )
// .map(student =>{
//   return  `${student.name}-${student.grade}-${student.status}:-${student.avg_marks}`
// })

// console.log(finalRes)


const numbers = [34,23,10,78,9,101]
// indexOf

numbers.indexOf(45)

// findIndex
const index = numbers.findIndex((value) => value % 2 !== 0)

console.log(index)

// find
const value = numbers.find((value) => value % 2 !== 0)

console.log(value)



// includes

// some

const res = numbers.some((value) => value % 2 !== 0)

console.log(res)

const isoddArry = numbers.every((value) => value % 2 !== 0)


// console.log(isoddArry)

const fruits = ['banana', 'kiwi','apple',undefined]

// const numbers = [10,23,9,34,78,101]
// -ve (no swap)
// 0 (no swap)
//  +ve (swap)
console.log(numbers)


// 

fruits.sort()
numbers.sort((a,b)=>{
    return a - b
})

console.log(numbers)
console.log(fruits)



const stundents = [
    {
        name:'Alice',
        marks:[27,34,56,78,90],
        // avg_marks:,
        grade:null
    },
    {
        name:'Bob',
        marks:[72,34,56,80,90],
        grade:10
    },
    {
        name:'Charlie',
        marks:[72,43,65,80,90,56],
        grade:11
    },
    {
        name:'Charlie',
        marks:[72,43,65,80,90,56],
        grade:9
    }
]

const withAvg = stundents.map((student)=>{

    const avg = student.marks.reduce((acc,mark) => acc + mark , 0) / student.marks.length

    student.avg_marks = parseFloat(avg.toPrecision(4))
    student.status = avg > 50 ? 'Pass' : 'Failed'
    
    return student

})

// console.log(withAvg)

stundents.sort((a,b)=>{

    return a.grade - b.grade

})

console.log(stundents)

