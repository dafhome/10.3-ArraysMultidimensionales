// 1- TABLAS DE MULTIPLICAR
// El usuario entra un intervalo de dos números entre el 1 y el 10 (el segundo número debe ser mayor
// que el primero).
// El programa muestra en orden, con un título, la tabla de multiplicar del primer número, y luego el siguiente, hasta
// el último.
// Ej: si entra 5 y 7, mostrará las tablas del 5, del 6 y del 7.

let menor;
let mayor;

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

// function tablas 
function tablasMultiplicar(){
    menor = parseInt(prompt("Introduce el primer número entre 1 y 10"));
    mayor = parseInt(prompt("Introduce el segundo número entre 1 y 10, mayor que el AuthenticatorAssertionResponse."));
    document.getElementById("tablas").innerHTML = "";
    for (menor; menor<mayor+1; menor++){
        document.getElementById("tablas").innerHTML += "Tabla del "+menor+": ";

        // for (let i=0; i<=10; i++){
        //     document.getElementById("tablas").innerHTML += i*menor+" ";
        // }
        numeros.forEach(function(numero) {
            document.getElementById("tablas").innerHTML += numero*menor+" ";
        });

        document.getElementById("tablas").innerHTML += "<br>";
    }
}
