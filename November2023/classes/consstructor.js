// class sujit {
//   constructor(name, lname, work) {
//     (this.name = name), (this.lname = lname), (this.work = work);
//   }

//   info() {
//     console.log(
//       `My name is ${this.name} and my surname is ${this.lname} and My profession is ${this.work}`
//     );
//   }
// }

// class sujit2 extends sujit {
//   constructor(name, lname, work, game, hobby) {
//     super(name, lname, work);
//     (this.game = game), (this.hobby = hobby);
//   }
//   static king() {
//     return "I am King";
//   }
// }

// const person = new sujit("sujit", "salunkhe", "devleoper");

// const baby = new sujit2("sujit", "salunkhe", "devleoper", "kabaddi", "nothing");
// baby.info();
// let a = sujit2.king()
// console.log(a + ' sujit')

// class Rectanle{
//     constructor(width,height){
//         this.width = width,
//         this.height = height;
//     }
//     get area (){
//         return this.width * this.height;
//     }
//     set width (value){
//         this.width = value;
//     }
//     set height (value) {
//         this.height = value;
//     }
// }

// const rec1 = new Rectanle(34,54)
// console.log(rec1.area)
// class Rectangle {
//     constructor(width, height) {
//         this._width = width;
//         this._height = height;
//     }
//     get area() {
//         return this.width * this.height;
//     }
//     set width(value) {
//         this._width = value;
//     }
//     set height(value) {
//         this._height = value;
//     }
// }

// const rec1 = new Rectangle(34, 54);
// console.log(rec1.area); // Access area without parentheses

// class Rectangle {
//     constructor(width, height) {
//         this._width = width;
//         this._height = height;
//     }

//     get width() {
//         return this._width;
//     }

//     set width(value) {
//         this._width = value;
//     }

//     get height() {
//         return this._height;
//     }

//     set height(value) {
//         this._height = value;
//     }

//     get area() {
//         return this._width * this._height;
//     }
// }

// const rec1 = new Rectangle(34, 54);
// console.log(rec1.area); // Output: 1836

// Array.prototype.myMap = function (cb) {
//     let arr = []
//     for(let i= 0;this.length;i++){
//         cb(this[i],i,this)
//     }
//     return arr
    
// }

// let arrr = [1,2,3]
// arr.reduce((acc,num) => {
//     return acc + num
// },0) 


Array.prototype.myReduce = function(cb,intialValue){
    let acc = intialValue
    for(let i = 0;i <this.length;i++){
        let acc =  acc ? cb(acc,this[i],i,this) : this[i]
    }
}
Array.prototype.myPush = function(...args){
    for(let i =0;i<args.length;i++){
        this[this.length] = args[i]
    }
    
}

// arr.myPush(3,3,4,54)
// console.log(arr)

// Array.prototype.myPop = function() {
//     const lastelement = this[this.length -1]
//     this.length--;
//     return lastelement
// }

// arr.myPop()
// Array.prototype.myShift = function () {
    //     if (this.length === 0){
        //         return undefined
        //     }
        //     let firstElement = this[0]
        //     for(let i =0;i < this.length -1;i++){
            //             this[i] = this[i+1]
            //                 }
//     this.length--
//     return firstElement
// }
let arr = [2,3,4,45]
Array.prototype.myConcat = function (...args){
    let newArray = this
    for(let i=0;i < args.length;i++){
        for(let k=0;k<args[i].length;k++){
            newArray[this.length] = args[i][k]
        }
    }
    return newArray
}
// arr.filter(sub => {
//     return sub < 2
// })
// Array.prototype.myFilter = function(cb){
//     let new2 = []
//     for(let i=0; i<this.length;i++){
//         const number = cb(this[i])
//         if(number){
//             new2.push(this[i])
//         }
//     }
//     return new2
// }
// const newarr = arr.myFilter(rum => {
//     return rum > 10
// })
// console.log(newarr)


function myobj (name,lname){
    this.name = name
    this.lname = lname
}

myobj.prototype.king = 'hogake'

let sujit = new myobj('naruto','sauke')
console.log(sujit.name)
console.log(sujit.king)
console.log(sujit.__proto__)


// arr.myShift()
// let arr3=[3,4,4]
// let arr4=[34,2,3]
// let arr2 = arr.myConcat(arr3,arr4 )
// console.log(arr2,'new')
