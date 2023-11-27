// function sayHiBye(firstName, lastName) {
//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }

//     alert( "Hello, " + getFullName() );
//     alert( "Bye, " + getFullName() );
//   }

// sayHiBye("sujit","salunkhe")
// // console.log("sujit is king")
// {var sujit= "sujitsfd"}
// alert(sujit)
// function a(){
//     b=9
//     c()
//     function c (){
//     console.log(b)
//     }
// }
// let b=10
// a()




let button = document.getElementById("Click");
let valuetext = document.getElementById("valuetext")
let flag = !true;
let value = 0;
button.addEventListener("click", () => {
  if(flag === true){
    flag = false
  }
  else {
    flag = true
  }
  if (flag) {
    value += 1;
    console.log(value)
  } else {
    value += 5;
    console.log(value);
  }
  valuetext.innerText = value
  
});
