// function makeuser(){
//     return{
//         name:'sujit',
//         ref(){
//             return this.name
//         }
//     }
// }
// let user =makeuser();
// alert(user.ref())
let caluculator = {
    read(){
        this.a = +prompt("what is your first number",0);
        this.b = +prompt("what is your second number",0);
    },
    sum(){
        return this.a + this.b
    },
    mul(){
        return this.a * this.b
    }
}
caluculator.read();
alert(caluculator.sum());
alert(caluculator.mul());