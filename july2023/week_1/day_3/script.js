// let sujit='abcd'
// let s=sujit.split("");
// s.reverse()
// let t = s.join("")
// console.log(t)

// let arr=[23,34,344]
// arr.forEach((Element)=>{
//     console.log(Element)
// })
let suji =[ {x:78,y:90} ,{x:98,y:943}]
    

// suji.forEach(({x,y})=>{
//     console.log(x,y)
// } )


for(let {x,y} of suji){
    console.log(x,y)
}