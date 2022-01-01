let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const advinhar = document.querySelector(".advinhar");
const ultiResultado = document.querySelector(".ultiResultado");
const altoBaixo = document.querySelector(".altoBaixo");

const btn_enviar = document.querySelector(".btn_enviar");
const insert_text = document.querySelector(".insert_text");

let contar = 1;
let resetar;

insert_text.focus(); //coloca o foco do cursor no campo para digitar o numero

function advinhe() {
  const chute = Number(insert_text.value);

  if (contar === 1) {
    advinhar.textContent = "Chute anterior: ";
  }

  advinhar.textContent += chute + " ";

  if (chute === numeroAleatorio) {
    ultiResultado.textContent = "Parabéns, você acertou";
    ultiResultado.style.backgroundColor = "green";
    altoBaixo.textContent = "";

    resetarJogo();
  } else if (contar === 10) {
    ultiResultado.textContent = "Game Over";
    altoBaixo.textContent = "";

    resetarJogo();
  } else {
    ultiResultado.textContent = "Errado";
    ultiResultado.style.backgroundColor = "red";

    if (chute < numeroAleatorio) {
      altoBaixo.textContent = "último chute foi muito baixo";
    } else if (chute > numeroAleatorio) {
      altoBaixo.textContent = "último chute foi muito alto";
    }
  }

  contar++;
  insert_text.value = "";
  insert_text.focus();
}

btn_enviar.addEventListener("click", advinhe);

function fimDeJogo() {
  insert_text.disabled = true;
  btn_enviar.disabled = true;
  resetar = document.createElement("buttom");
  resetar.textContent = "Começar novo jogo";
  document.body.append(resetar);
  resetar.addEventListener("click", resetarJogo);
}

function resetarJogo() {
  contar = 1;

  const resetarParar = document.querySelectorAll(" .resultado");
  for (const resetarParar of resetarParar) {
    resetarParar.textContent = "";
  }

  resetar.parentNode.removeChild(resetar);

  insert_text.disabled = false;
  btn_enviar.disabled = false;
  insert_text.value = "";
  insert_text.focus();

  ultiResultado.style.backgroundColor = "white";

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

