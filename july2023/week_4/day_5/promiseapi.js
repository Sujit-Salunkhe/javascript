let p1= new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve("value1")
    },1000)
})

let p2= new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve("value1")
    },2000)
})

let p3= new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve("value1")
    },3000)
})

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

let all_promise =Promise.allSettled([p1,p2,p3])
console.log(all_promise)
