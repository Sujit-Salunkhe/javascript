alert("Sujit is the king")

// let user = {name: "John"};
alert(user); // [object Object]
alert(user.valueOf() === user); // true

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
  alert(user + 500); // valueOf -> 1500
  
let obj = {
    // toString handles all conversions in the absence of other methods
    toString() {
      return "2";
    }
  };
  
  alert(obj * 2); // 4, 