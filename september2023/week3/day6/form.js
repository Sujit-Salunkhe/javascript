function validations() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirmpassword").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let usercheck = /^[A-Za-z]{3,30}$/;
  let passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  let emailcheck = /^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  let mobilenumbercheck = /^[789][0-9]{9}/;
  if (usercheck.test(username)) {
    document.getElementById("usererror").innerHTML = "";
  } else {
    console.log("condition is working");
    document.getElementById("usererror").innerHTML = "UserName is invalid";
    return false;
  }
  if (passwordcheck.test(password)) {
    document.getElementById("passworderror").innerHTML = "";
  } else {
    document.getElementById("passworderror").innerHTML = "Password in invalid";
    return false;
  }
  if (password === confirmpassword) {
    document.getElementById("confirmpassworderror").innerHTML = " ";
  } else {
    document.getElementById("confirmpassworderror").innerHTML =
      "your password not matched";
    return false;
  }
  if (emailcheck.test(email)) {
    document.getElementById("emailerror").innerHTML = "";
  } else {
    document.getElementById("emailerror").innerHTML = "Invalid email";
    return false;
  }
  if (mobilenumbercheck.test(number)) {
    document.getElementById("numbererror").innerHTML = "";
  } else {
    document.getElementById("numbererror").innerHTML = "Invalid number";
    return false;
  }
}
