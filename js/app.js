// Arreglo para guardar las referencias de los elementos del DOM
const numeros = [];
let resultado = "";

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
const pantalla = document.getElementById("resultado");

// Agregando el evento a todos los botones
for (let i = 0; i < 10; i++) {
    numeros[i].addEventListener("click", function () {
        mostrarEnPantalla(i.toString());
    });
}

//Funcion para mostrar en pantalla
function mostrarEnPantalla(valor) {
    if(resultado.length<12){
        resultado += valor;
    }
    pantalla.value = resultado;
}

//Borra todos los numeros ingresados
numeros[10].addEventListener("click", function () {
    resultado = "";
    pantalla.value = resultado;
});

//Brrar el ultmo numero ingresado
numeros[11].addEventListener("click", function () {
    resultado = resultado.slice(0, -1);
    pantalla.value = resultado;
});