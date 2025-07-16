

// single treaded 
// single call stack



// timer functions

// call bakcs

// setTimeout
// setTimeout(callback,timer)

// console.log('1')
// const timerId =  setTimeout((name,age)=>{

//     console.log('2',name,age)
    
// },1000,'John',30)

// let clearTimer = false

// if(clearTimer){

//     clearTimeout(timerId)
// }

// console.log('3')


// setInterval 
// setInterval(callback,timer,args.....)

let count = 10

const intervalId =  setInterval((stop)=>{
    console.log(count--)
    if(count === stop){
        console.log("time is up")
        clearInterval(intervalId)
    }
},1000,5)


// let hr min sec
// sec--
// sec === 0 ? min-1 & sec + 59
// min == 0 ? hr -1 & min + 59 & sec + 59





