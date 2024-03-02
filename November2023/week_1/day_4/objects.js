// myobj={
//     Name:"sujit",
//     lastName:"salunkhe",
// }

// // console.log(myobj['Name'])
// function createremplyee (firstname,lastName,salary){
    
//     this.firstname=firstname,
//     this.lastName=lastName,
//     this.salary=salary
    
// }

// let emp1= new createremplyee('sujit','salunkhe',20000);
// console.log(emp1)

// function Car(speed,price,categoty){
//     this.speed=speed,
//     this.price=price,
//     this.categoty=categoty
// }

// let wagonor = new car(100,500000,"small")
// console.log(wagonor)

// let date = new Date('12/4/2020')
// console.log(date)
// // const date2 = 12/4/2027
// let day  = date.getDay()
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(daysOfWeek[day])
// class Person:
// console.log(23 & 7)

// function f(a,b){
//     console.log(a,b)
// }

// function f(a){
//     return function s(b){
//         console.log(a,b)
//     }
// }

// console.log(f(5)(8))

// function sum (a){
//     return function (b){
//         return function (c) {
//             return a+b+c
//         }
//     }
// }

// (function () {
//     let sujit = 'Sujit'
//     console.log(sujit)
// })();
// console.log(sum(4)(1)(5))

// function sum (a) {
//     if (a){
//         return sum(a+b);
//     return a;
//     }
// }

// function sum (a) {
//     return function (b,c){
//         return a+b+c
//     }
// }

// let x = sum(10)
// console.log(x(3,4))
// console.log(x(23,3))

// console.log(sum(20)(38,3))

// function updateElementText (id){
//     return function(content){
//         document.querySelector("#" + id).textContent = content
//     }
// }

// let updateHeader = updateElementText("heading")


// updateHeader('RoadSide King')

// function x (a,b,c){
//     return a+ b+c
// }

// function curry(fun){
//     return function curriedFun(...args){
//         if(args.length >= fun.length){
//             return  fun(...args)
//         } else {
//             return function(...next){
//                 return curriedFun(...args,...next);
//             }
//         }
//     }
// }
// let fname = "name"
// let lname = "Salunkhe"
// let fname2 = "Sujit"
// const detilas = {
//     [fname] : lname,
//     [fname2] : fname2
// }
// console.log(detilas)

// const User = {
//     Name :"Sujit",
//     lname:'Salunkhe',
//     isGood:'Yes Is Good'
// }
// for (key in User) {
//     console.log(key,":",User[key] )
// }

// let nums = {
//     a:100,
//     b:200,
//     title:'My nums'
// }

// function MulitplayByTwo(b){
//     for (key in b){
//         typeof b[key] === 'number' ? console.log(2 * b[key]) : null
//     }
// }

// MulitplayByTwo(nums)

// const user = {
//     name:"sujit",
//     lname:"Salunkhe"
// }

// localStorage.setItem("property",JSON.stringify(user))
// const data = (JSON.parse(localStorage.getItem("property")))
// console.log(data)
// console.log([..."sujit"])

// const user = {
//     name:"Sujit",
//     lname:"Salunkhe",
//     fullName: {
//         fname:"Yuvraj"
//     }
// }

// const {fullName:{fname}} = user
// console.log(fname)
// const admin = {
//     admin :' true',
//     ...user,
//     name:'King'
// }

// console.log(admin)

// const user = {
//     firstName : 'sujits',
//     getName () {
//         const firstName ="sujit"
//         return this.firstName
//     }
//  }
// function user2 (){
//     return {
//         name : "John",
//         ref () {
//             return this
//         } 
//     }
// } 
// let user3 = user2()

// // console.log(user.getName())
// // console.log(user3.ref.name)
// console.log(user3.ref().name)

// const user4 = {
//     name:"PIyush Agrewal",
//     logmessage () {
//         console.log(this.name)
//     }
// }

// setTimeout(() =>  {
//     user4.logmessage();
// },1000)
// let user5 = {
//     name:'sujits',
//     getName () {
//         return "welcome"  + this.name
//     },
//     greet:() => {
//         return "hello " + this.name
//     }
// }

// console.log(user5.getName())
// console.log(user5.greet())


// user5 ={
//     name:'king',
//     arrow : () => {
//         console.log(this.name)
//     }
// }

// user5.arrow()

// var obj ={
//     name:"Piyush"
//     }

// function SayHello () {
//     return "hello" + this.name

// }

// sujit = {
//     name:'sujit'
// }

// console.log(SayHello.call(sujit))

// const animals = [
//     {species : "Lion", name:"King"},
//     {species:"Whale",name:"Queen"}
// ]

// function printAnimals(i){
//     this.print = function (){
//         console.log("#" + i + " " + this.species + ":" + this.name)
//     };
//     this.print()
// }

// for (let i = 0;i < animals.length;i++){
    
//     printAnimals.call(animals[i],i)   
// }

// let age = 10;
// var Person = {
//     name:'Piyush',
//     age:20,
//     getAge: () => {
//         console.log(this.age);
//     }
// }

// // Person.getAge()

// Function.prototype.myCall = function (context = {} ,...args){
//     if (typeof this != 'function'){
//         throw new Error (this + " Is Not calleble")
//     }
//     context.fn = this
//     context.fn(...args)
//  } 
// Function.prototype.myApply = function (context = {} ,args = []){
//     if (typeof this != 'function'){
//         throw new Error (this + " Is Not calleble")
//     }
//     if (!Array.isArray(args)) {
//         throw new Error ('Plese provide array')
//     }
//     context.fn = this
//     context.fn(...args)
//  } 
// Function.prototype.myBind = function (context = {} ,...args){
//     if (typeof this != 'function'){
//         throw new Error (this + " Is Not calleble")
//     }
//     context.fn = this
//     return function (...newArgs) {
//         return context.fn (...args,...newArgs)
//     }

//  } 
// function getName() {
//     console.log(this.name)
// }
// getName.myCall({name:"sujit"})

// users = {

//     getHold : function () {
//         console.log(this.lname)
//     }
// }

// users.getHold({lname : "salunkhe"})

// const sub = new Promise((resolve,reject) => {
//     const result = true
//     if (result) resolve("subscribe to Whatsapp")
//     else reject( new Error ('why'))
// })

// sub.then((res) => {
//     console.log((res))
// }).catch(err => {
//     console.log(err)

// })

