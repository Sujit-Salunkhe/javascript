// function User(name,mname,lname){
//     this.name=name
//     this.mname=mname
//     this.lname=lname
// }
// let admin = new User("sujit","Yuvraj","Salunkhe")
// let Persons=new User("Vaishnav","Yuvraj","Salunkhe")
// alert (Persons.name)
// alert (Persons.mname)
// alert (Persons.lname)
// alert (admin.name)
// alert (admin.mname)
// alert (admin.lname)
// function User(){
//     alert(new.target)
// }
// User()
// new User()
function User(name){
    this.name=name,
    this.sayhi= function(){
    alert("My name is " + this.name)
    }

}
let sujit=new User("sujit")
sujit.sayhi()