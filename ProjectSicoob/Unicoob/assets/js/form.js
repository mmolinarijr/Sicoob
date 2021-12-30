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
  validation(email, 1, "Email nāo pode ser em branco");
  validation(text, 2, "Sua mensagem não pode ser em branco");
});

let validation = (id, serial, message) => {
  //remove espacos em branco
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    
    id.style.border = "2px solid red";
    
    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
    
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
    
    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
  
};




