// const button = document.getElementsByClassName("clikme")[0]
// button.addEventListener("click",function(e){
//     console.log("you clicked me",e);
// });
// // console.log(2==="2");
// const names = {
//     fname:"sujit",
//     lname:"Salunkhe"
// }
// function printName (){
//     console.log(this.fname + " " + this.lname);
// }
// names.fun = printName;
// console.log(names.fun());
// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// a();
// function test() {
//   var z = 10;
// };
// // console.log(z);
// function x() {
//   var y = 7;
//   function z() {
//     console.log(y);
//     console.log(a);
//   }
//   const a = 10
//   return z;
// }
// const run = x();
// run();
// function x (){
//      var i = 1 ;
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// };

// x();

// function x ()   {
//     console.log("X is called");
// }

// var b = function  (){
//     console.log("B is called");

// }

// b()

// this.name = "Global Name";
// const deatil = {
//   name: "sujit",
//   age: 22,
//   detailed: () => {
//     console.log(this.name + " " + this.age);
//   },
//   deatil2: {
//     name: "salunkhe",
//     age: 23,
//     detailed3: () => {
//       console.log(this.name + " " + this.age + "from detailed2");
//     },
//   },
// };

// console.log(deatil.deatil2.detailed3());

// const array = [1, 2, 3, 4, 5];
// const newArray = array.map((num) => num * 3)
// console.log(newArray);

// const newArrray2 = array.filter((num) => num%2 === 0)
// console.log(newArrray2);
// const newArray3 = array.reduce((acc, num) => acc + num, 0)

// for (let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

// let x = 10;
// {
// }


// var a = 100;

// // {
// //   var a = 10;
// //   let b = 20;
// //   const c = 40;
// //   console.log(a);
// //   console.log(b);
// //   console.log(c);

// // }

// function x(){
//   var a = 10; 
//   console.log(a);
// }

// const deatil = {
//   names: "sujit",
//   age: 22,
  
// }

// const {names,age} = deatil;
// console.log(names);
// console.log(age);
// // x();
// const dup = [1,1,2,2,3,4,5,5,6,7,8,8,9,78,78,99];
// const newdup = [...dup,89,69]

// const new_dup = Array.from(new Set(dup));
// console.log(new_dup);
// const news = dup.filter((num,i) => {
//     return num !== dup[i+1];
// })
// console.log(news);
// a = undefined;
// console.log(a);
// console.log(null)
// console.log(typeof null)
// console.log(a === null)
// const a = "sujit";
// console.log(`My name is ${a}`)

// const details = {
//   name: "sujit",
//   age: 22,

// }

// const copyed = {...details,height : "5.78ft"};
// console.log(copyed);

// const arr = []
// if (arr.length){
//     console.log("array is not empty");
// }else{
//     console.log("array is empty",arr);
// }
// console.log(arr.length)
// const obj = {
//   game1:"cricket",
// }

// const obj2 = {
//   game:"crickets",
//   game:"hockey",
// }

// const obj3 = {...obj,...obj2,game2 :"football"}
// console.log(obj3)
function details(name,age,...skills){
  this.name = name;
  this.age = age;
  this.skills = [...skills];
};

const sujit = new details("sujit",22,"html","css","js","react");
console.log(sujit);