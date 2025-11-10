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


// Array.prototype.myReduce = function(cb,intialValue){
//     let acc = intialValue
//     for(let i = 0;i <this.length;i++){
//         let acc =  acc ? cb(acc,this[i],i,this) : this[i]
//     }
// }
// Array.prototype.myPush = function(...args){
//     for(let i =0;i<args.length;i++){
//         this[this.length] = args[i]
//     }
    
// }

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
// let arr = [2,3,4,45]
// Array.prototype.myConcat = function (...args){
//     let newArray = this
//     for(let i=0;i < args.length;i++){
//         for(let k=0;k<args[i].length;k++){
//             newArray[this.length] = args[i][k]
//         }
//     }
//     return newArray
// }
// // arr.filter(sub => {
// //     return sub < 2
// // })
// // Array.prototype.myFilter = function(cb){
// //     let new2 = []
// //     for(let i=0; i<this.length;i++){
// //         const number = cb([thisi])
// //         if(number){
// //             new2.push(this[i])
// //         }
// //     }
// //     return new2
// // }
// // const newarr = arr.myFilter(rum => {
// //     return rum > 10
// // })
// // console.log(newarr)


// // function myobj (name,lname){
   
// //         this.name = name,
// //         this.lname = lname


// // }

// // myobj.prototype.king = 'hogake'

// // let sujit =  new myobj('naruto','sauke')

// // console.log(sujit.name)
// // console.log(sujit.lname)
// // console.log(sujit.king)
// // console.log(sujit.__proto__)


// // arr.myShift()
// // let arr3=[3,4,4]
// // let arr4=[34,2,3]
// // let arr2 = arr.myConcat(arr3,arr4 )
// // console.log(arr2,'new')

// class person {
//     constructor(name){
//         this.name = name
//     }
//     myname = function () {
//         console.log(`My name is ${this.name}`)
//     }

// }

// class Enginner extends person {
//     constructor(name,work) {
//         super(name)
//         this.work = work
//     }
//     mywork = function (){
//         console.log(`My work is ${this.work} `)
//     }
// }

// class emplyee extends Enginner {
//     constructor(name,work,sal){
//         super(name,work,sal)

//         this.sal =sal
//     }
// }

// // console.log(emplyee.mywork())
// const sujit = new emplyee('sujit','dev',3)
// sujit.myname()
// sujit.mywork()


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function fetchData() {
//     console.log('Fetching data...');
//     await delay(2000); 
//     console.log('Data fetched!');
//     return { name: 'John', age: 30 }; 
// }

// async function main() {
//     console.log('Starting...');
//     try {
//         const data = await fetchData(); 
//         console.log('Received data:', data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
//     console.log('Finished!');
// }

// main();

// console.log(1)
// async function print () {
//     await new Promise((resolve,reject) => resolve(console.log(2)))
//     console.log(3) 
// }


// print()
// console.log(4)


function sort(a){
    alphabet = ''
    for (let i= 97;i<=122;i++){
        alphabet += String.fromCharCode(i);
    }
    a.split('').sort().join('');
    let i =0
    opr =0
    for (let char of sorted){
        if(char !== a[i]){
            opr +=1
        }
        else{
            i++
        }
    }
    
    

}



function abc(x){
    x = "x-" + x
    return function (y){
        y ='y-' + x
        return function (z){
            return 'z-' + y
        }
    }
}

z = abc('a')('b')('c')
console.log(z)

// console.log(sort('fghcyzx'))