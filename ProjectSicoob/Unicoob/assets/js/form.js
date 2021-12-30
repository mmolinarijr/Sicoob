let id = id => document.getElementById(id);
let classes = classes => document.getElementsByClassName(classes);

let names = id("nome"),
    email = id("email"),
    form = id("form"),
    text = id("insertmsg"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", e => {
  e.preventDefault();

  validation(names, 0, "Nome nāo pode ser em branco");
  validation(email, 0, "Email nāo pode ser em branco");
  validation(text, 0, "Sua mensagem não pode ser em branco");
});

let validation = (id, serial, message) => {
  //remove espacos em branco
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
  } else {
    errorMsg[serial].innerHTML = "";
  }
};



