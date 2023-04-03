let estadoSemaforo = 0;

const cambiarEstado = () => {
  switch (estadoSemaforo) {
    case 0:
      cambiarColor("red", true);
      cambiarColor("yellow", false);
      cambiarColor("green", false);
      break;
    case 1:
      cambiarColor("red", false);
      cambiarColor("yellow", false);
      cambiarColor("green", true);
      break;
    case 2:
      cambiarColor("red", false);
      cambiarColor("yellow", true);
      cambiarColor("green", false);
      break;
    default:
      break;
  }
  estadoSemaforo++;

  if (estadoSemaforo > 2) {
    estadoSemaforo = 0;
  }
};

const cambiarColor = (id, prender) => {
  const elemento = document.getElementById(id);
  elemento.style.backgroundColor = prender ? id : "gray";
};

const btn = document.getElementById("btn");
btn.addEventListener("click", cambiarEstado);
