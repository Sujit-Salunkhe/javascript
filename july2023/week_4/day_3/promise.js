let p= new Promise((resolve,reject) =>{
    // console.log("I am your promise")
    setTimeout(()=>{
        console.log("Your promise is fulfilled")
        resolve(true)
    },5000) 
})

let p2= new Promise((resolve,reject) =>{
    // console.log("I am your promise")
    setTimeout(()=>{
        console.log("Your promise is rejected")
        reject(new Error("I am an error"))
    },5000) 
})
p.then((value)=>{
    console.log(value)
})
p2.catch((error)=>{
    console.log("some error occure")
})
console.log(p,p2)
// p.catch((error) => {
//     console.error(error); // Handle the rejected promise here
// });