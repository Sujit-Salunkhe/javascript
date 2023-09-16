function validations () {
    let username= document.getElementById("username").value
    let password= document.getElementById("password").value
    let confirmpassword= document.getElementById("confirmpassword").value
    let number= document.getElementById("number").value
    let usercheck=/^[A-Za-z]{3,30}$/
    let passwordcheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
}