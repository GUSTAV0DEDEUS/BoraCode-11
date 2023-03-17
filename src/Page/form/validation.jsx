export default function validation(){
  var form = document.getElementById("form");
  var emailValue = document.getElementById("email").value;
  var email = document.getElementById("email");
  var text = document.getElementById("EmailFail");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailValue.match(pattern))
  {
    email.classList.remove("invalid")
    text.innerText = "";
  }
  else{
    email.classList.add("invalid")
    text.innerText = "Digite um e-mail válido"
  }
  form.addEventListener("submit", (e) =>{
    e.preventDefault()
  })
}