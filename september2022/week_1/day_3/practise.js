function Accumulater(a){
    this.read()=function(){
        add=prompt("How much do you want to add",0)
        return add + a
}
}
let accumulate= new Accumulater(1)
accumulate.read()
accumulate.read()
alert(accumulate.)
function Accumalater(a){
    this.value=a;
    this.read = function(){
    this.value += +prompt("how much do you want to add",0)   ;
    }
};
let accumulate2= new Accumalater(2);
accumulate.read();
accumulate.read();
accumulate.read();
alert(accumulate.value)
let user={};
// alert(user.adderess.street)
let  user2={};
alert(user.adderess && user.adderess.street && user.adderess.street.name)
alert(user?.adderess?.street?.name)
let user3={
    address:{
        street:{
            name:"sujit"
        }
    }
}
alert(user?.address?.street?.name)
// alert(user?.address)
let user4={};
alert(user?.address.street)
let user5 = null;
let x=0
user?.sayhi(x++);
// alert(x)
let user6={
    admin(){
        alert("I am admin")
    }
}
let colors={};
user.admin?.()
colors.admin?.()