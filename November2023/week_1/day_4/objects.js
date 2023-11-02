myobj={
    Name:"sujit",
    lastName:"salunkhe",
}

// console.log(myobj['Name'])
function createremplyee (firstname,lastName,salary){
    
    this.firstname=firstname,
    this.lastName=lastName,
    this.salary=salary
    
}

let emp1= new createremplyee('sujit','salunkhe',20000);
console.log(emp1)

function Car(speed,price,categoty){
    this.speed=speed,
    this.price=price,
    this.categoty=categoty
}

let wagonor = new car(100,500000,"small")
console.log(wagonor)