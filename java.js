let verify = document.getElementById('password');
let verify1 = document.getElementById('confirm-password');
let passOne 
let passOne1

verify1.addEventListener("blur", (e) => {
  passOne = verify.value;
  passOne1 = verify1.value;
  console.log(passOne);
  console.log(passOne1);
  if (passOne != passOne1) {
    alert("Passwords are not the same. Please enter again")
    verify1.value = "";
    verify.value = "";
  }
})

