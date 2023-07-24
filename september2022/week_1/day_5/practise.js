// let user={
//     name:"sujit",
//     LastName:"Salunkhe"
// }
// let game=Symbol.for("Game changer")
// let gamedevloper=Symbol("The Daddy of Game changer ")
// let id =Symbol.for("id")
// let idagain=Symbol.for('id')
// alert(id == idagain)
// alert(Symbol.keyFor(id))
// alert(Symbol.keyFor(game))
// alert(gamedevloper.description)
// let sujit={
//     name:"sujit",
//     work:'kuch nahi karta hai'
// }
// let did=Symbol("sujit")
// sujit[did]=788
// sujit[did]=78
// // alert(sujit[did])
// let sujit=54467.5445
// let salunkhe="The king of the world . It happens first time in the world,That is the most prectious item in the world"
// alert(typeof(sujit))
// alert(typeof(salunkhe))
// let sujit=4555
// sujit2=String(sujit)
// alert(typeof(sujit2
let user={
    name:"sujit",
    age:18,

[Symbol.toPrimitive](hint){
    alert(`hint: ${hint}`);
    return hint=="string" ? `{name:"${this.name}"}`:this.age
}
};
alert(user)
alert(+user)
alert(user + 455)