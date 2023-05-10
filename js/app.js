// Arreglo para guardar las referencias de los elementos del DOM
const numeros = [];
let resultado = 0.0;
let operaciones = [];
let primerNumeroIngresado = false;

// Obtener referencia a los elementos del DOM
numeros[0] = document.getElementById("0");
numeros[1] = document.getElementById("1");
numeros[2] = document.getElementById("2");
numeros[3] = document.getElementById("3");
numeros[4] = document.getElementById("4");
numeros[5] = document.getElementById("5");
numeros[6] = document.getElementById("6");
numeros[7] = document.getElementById("7");
numeros[8] = document.getElementById("8");
numeros[9] = document.getElementById("9");
numeros[10] = document.getElementById("c");
numeros[11] = document.getElementById("u");
numeros[12] = document.getElementById("div");
numeros[13] = document.getElementById("multi");
numeros[14] = document.getElementById("resta");
numeros[15] = document.getElementById("suma");
numeros[16] = document.getElementById(".");
numeros[17] = document.getElementById("=");

const pantalla = document.getElementById("resultado");

// Agregando el evento a todos los botones
for (let i = 0; i < 10; i++) {
  numeros[i].addEventListener("click", function () {
    mostrarEnPantalla(i.toString());
  });
}

numeros[16].addEventListener("click", function () {
  mostrarEnPantalla(".");
});

//Funcion para mostrar en pantalla
function mostrarEnPantalla(valor) {
  if (!primerNumeroIngresado && operaciones.length === 0 && valor !== ".") {
    return; // Evitar agregar operadores sin ingresar números primero
  }

  if (valor === "." && operaciones.includes(".")) {
    return; // Evitar agregar múltiples puntos decimales
  }

  if (operaciones.length < 12) {
    operaciones.push(valor);
  }
  pantalla.value = operaciones.join("");
  primerNumeroIngresado = true;
}

//Borra todos los numeros ingresados
numeros[10].addEventListener("click", function () {
  operaciones = [];
  resultado = 0.0;
  pantalla.value = "";
});

//Borrar el último número ingresado
numeros[11].addEventListener("click", function () {
  operaciones.pop();
  pantalla.value = operaciones.join("");
});

//Divide los números
numeros[12].addEventListener("click", function () {
  operaciones.push("/");
  pantalla.value = operaciones.join("");
});

//Multiplica los números
numeros[13].addEventListener("click", function () {
  operaciones.push("*");
  pantalla.value = operaciones.join("");
});

//Resta los números
numeros[14].addEventListener("click", function () {
  operaciones.push("-");
  pantalla.value = operaciones.join("");
});

//Suma los números
numeros[15].addEventListener("click", function () {
  operaciones.push("+");
  pantalla.value = operaciones.join("");
});

//Muestra el resultado
numeros[17].addEventListener("click", function () {
  const expresion = operaciones.join("");
  resultado = eval(expresion);
  pantalla.value = resultado.toString();
});