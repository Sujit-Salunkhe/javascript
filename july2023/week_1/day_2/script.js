// let arr=[53,23,324];
// a=arr.map((value)=>{
//     console.log(value)
//     return value +1
// })
// console.log(a)
// const a = ["d","b","c","g"]
// for(let values of a ){
//     console.log(values)
// }
// let sujit="cat"
// console.log(a.includes(sujit))

function vowelsAndConsonants(s) {
    vowel=["a","e","i","o","u"]
    svowel=[]
    constents=[]
    for(let value of s){
        if(vowel.includes(value)){
            svowel.push(value)
        }
     else{
         constents.push(value)
     }
    }
    for(let value of svowel){
        console.log(value)
    }
    for(let value of constents){
        console.log(value)
    }
 }
//  vowelsAndConsonants("javascriptloops")
// let number=[23,23,34,34]
// number_2=number.sort()
// console.log(number_2)
let second_largest = (a)=>{
    let c = a.sort((a,b) => a - b)
    for(let i=1; i < c.length ; i++){
        // console.log("i " + i +" c[c.length-i] "+c[c.length-i] + " " +  c[c.length-(i + 1)])
        if(c[c.length-i] === c[c.length-(i + 1)]){
                continue;
            }
        else{
            console.log(c[c.length - (i + 1)])
            break;
            
    }
    }}

sujit=[45,646,646,7,67,45,45]
// second_largest(sujit)
// console.log(sujit)4
// console.log(sujit[sujit.length -1])
// console.log(8-(1-1))
g=sujit.pop()
console.log(g)