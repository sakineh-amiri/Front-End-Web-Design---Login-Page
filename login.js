// let emailInput = document.getElementById("email");
// function charchecker1() {
//   if (emailInput.value.length < 12) {
//     alert("you should enter at least 12 charector for email.");
//   } else {
//     alert("email is good.");
//   }
// }

// let passwordInput = document.getElementById("password");
// function charchecker2() {
//   if (passwordInput.value.length < 6) {
//     alert("you should enter at least 6 charector for password.");
//   } else {
//     alert("password is good.");
//   }
// }

////////////////////////////////////////////////////////////
//sending massage after entering input by onblur Event in js//
////////////////////////////////////////////////////////////
//email
let email = document.querySelector("#email");

//email.addEventListener("blur", emailBlur);
//u can use this code to replace *onblur=" emailBlur()"* from html to js
//onblur=" emailBlur()"  =>   "blur", emailBlur
//without 'on' for event
//without () for function

function emailBlur() {
  if (email.value.length < 12) {
    alert("email must contain at least 12 characters.");
  } else {
    alert("correct email value.");
  }
}

//password

let password = document.querySelector("#password");
function passwordBlur() {
  if (password.value.length < 6) {
    alert("password must contain at least 6 characters.");
  } else {
    alert("correct password value.");
  }
}
