// const x ={
//     name:'sujit'

// }

// const age = {
//     age:40
// }

// age.__proto__ = x

// const king = {

//     position :"manager"
// }
// x.__proto__ = king
// console.log(age.position)

// const obj = {
//     name:"sujit",
//     hello:function () {
//         console.log(`hello i am ${this.name}`)
//     }
// }

// obj.hello()

// function callbacckfun(callback){
//     console.log(callback())

// }

// callbacckfun(obj.hello.bind(obj))


// function currying(a){
//     return function (b){
//         return  function(c){
//             return a+b+c        } 
//     }

// }

// console.log(currying(1)(2),(3));
// let sujit ='sujit'
// console.log(window.sujit)

// // console.log(window.sujit)
// if(!window.sujit){
//     console.log(false)
//     console.log(sujit)
// }else{
//     console.log(true)
// }


// let value= 12
// let s = [...Array(value).keys()]

// class User{
//     constructor(name,age,status){
//         this.name=name,
//         this.age=age,
//         this.status=status

//     }
//     greet() {
//     alert(`Welcome ${this.name}`)
//     }
// }
// let a =prompt("What's Your Name",'sujit')
// const jon = new User(a,34,'Manger')
// setTimeout(jon.greet(),5000)
let num= 2
function x (num){
    num++
}
x(num)
console.log(num)


