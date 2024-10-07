
var cifra = "";
var acumulado = 0;
var operacion = null;

function display_number(numero) {
  document.getElementById("display").value = cifra + numero;
  cifra = document.getElementById("display").value;
}

function seleccionarOperacion(op) {
  if (cifra !== "") {
    acumulado = parseInt(cifra);
    cifra = "";
  }
  operacion = op;
}

function resultado() {
  var valorActual = parseInt(cifra);
  if (operacion === "+") {
    acumulado += valorActual;
  } else if (operacion === "-") {
    acumulado -= valorActual;
  } else if (operacion === "*") {
    acumulado *= valorActual;
  } else if (operacion === "/") {
    acumulado /= valorActual;
  }
  document.getElementById("display").value = acumulado;
  cifra = acumulado.toString();
  operacion = null;
}

function eliminar() {
  cifra = "";
  acumulado = 0;
  operacion = null;
  document.getElementById("display").value = 0;
}