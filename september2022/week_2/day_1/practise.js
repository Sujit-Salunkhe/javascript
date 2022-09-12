alert(obj);

// using object as a property key
anotherObj[obj] = 123;
"number"
// For an object-to-number conversion, like when we’re doing maths:

// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;
// binary plus uses the "default" hint
let total = obj1 + obj2;

// obj == number uses the "default" hint
// if (user == 1) { ... };
let user = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // 
  let obj = {
    toString() {
      return "2";
    }
  };
  
//   alert(obj + 2); / 