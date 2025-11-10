
// console.log(count);
let count =4;
var count2=4;

const arr= [1,2,3,4,5,6,8]

const plus = arr.reduce((acc,numb,i,arr) => {
    return acc + numb
},0)

console.log(plus)


Array.prototype.myReduce = function (cb,acc){
    acc = acc ? acc :0;
    for(let i=0;i < this.length;i++){
        acc
    }
}

arr.map((value,i,arr) =>{
    return value + 1
})
Array.prototype.myMap = function (cb){
    let newArray = []
    for(let i=0;i<this.length;i++){
        const newNub = cb(this[i],i,this)
        newArray.push(newNub)
    }
    return newArray
}