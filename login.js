let emailInput = document.getElementById("email");
function charchecker1() {
  if (emailInput.value.length < 12) {
    alert("you should enter at least 12 charector for email.");
  } else {
    alert("email is good.");
  }
}

let passwordInput = document.getElementById("password");
function charchecker2() {
  if (passwordInput.value.length < 6) {
    alert("you should enter at least 6 charector for password.");
  } else {
    alert("password is good.");
  }
}
