// let p=new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log("promise is fullfilled")
//         resolve(56)
//     },2000)
        
// })
// p.then((value)=>{
//     console.log(value)
//     let p2=new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve("promise 2")
//         },2000)
//     })
//     return p2
// }).then((value)=>{
//     console.log("we are done")
//     return 2
// }).then((value)=>{
//     console.log("Are BT ho gayi to mai ky karu")
// })
// const loadScript =(src)=>{
//     return new Promise((resolve,reject)=>{
//             let script=document.createElement("script")
//             script.src=src
//             script.type="text/javascript"
//             document.body.append(script)
//             script.onload =()=>{ resolve(100 ) }
//             script.onerror=()=>{reject(0)}
//     }) 
// }
// let p1=loadScript("https://code.jquery.com/jquery-3.2.1.slim.min.js")
// p1.then((value)=>{
//     console.log("Your script is loaded")
//     console.log(value)
// }).catch((error)=>{
//     console.log("Sorry this script is not loaded" + error)
// })