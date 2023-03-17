export default function validation() {
  var form = document.getElementById("form");
  var email = document.getElementById("email");
  var text = document.getElementById("EmailFail");
  var textPassword = document.getElementById("PasswordFail");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  var patternPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  var password = document.getElementById("password");

  if (password.value.match(patternPass)) {
    password.classList.remove("invalid")
    textPassword.innerText = "";
  }
  else {
    password.classList.add("invalid")
    textPassword.innerText =
      "Digite uma senha contendo 8 caracteres com no mínimo, uma letra maiúscula, um número e um símbolo ($*&@#)";
  }
  if (email.value.match(pattern)) {
    email.classList.remove("invalid")
    text.innerText = "";
  }
  else {
    email.classList.add("invalid")
    text.innerText = "Digite um e-mail válido"
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault()
  })
}
