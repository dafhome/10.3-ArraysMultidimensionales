// 3- LA GALLETA DE LA FORTUNA
// Tienes dos arrays,
// - uno con los nombres de los estudiantes de este curso
// - Y otro con galletas con mensajes de ‘vaticinio’, la cantidad que tú quieras (no hace falta que sea la misma
// cantidad que estudiantes).
// Debes buscar ALEATORIAMENTE un estudiante, y una frase de vaticinio,
// Y mostrar el resultado del tipo:
// "vaticinio para Ferdi:
// Este fin de semana debes de escuchar tus sueños, porque contienen la clave para encontrar un tesoro cerca de tu casa"

const compañeros = ["Laia", "Carla", "Albert", "Juan Carlos", "Fernando", "Sergio", "Rifi", "Walid", "Herman", "Ferdi", "David"];
const suerte = [
    "El éxito llegará a tu puerta cuando menos lo esperes",
    "La perseverancia es la llave que abrirá todas las puertas de la fortuna",
    "El optimismo es el primer paso hacia la felicidad y la buena fortuna",
    "Las oportunidades están esperando en cada esquina, solo necesitas estar listo para encontrarlas",
    "La suerte favorece a aquellos que trabajan arduamente y nunca se rinden",
    "Cada desafío es una oportunidad disfrazada. ¡Aprovéchala!",
    "La fortuna sonríe a los valientes que se atreven a perseguir sus sueños",
    "Confía en ti mismo y en tu intuición; son tus mayores aliados en la búsqueda de la suerte",
    "Las dificultades son simplemente pruebas en el camino hacia la grandeza",
    "Mantén una mente abierta y el universo te sorprenderá con bendiciones inesperadas",
    "Cada fracaso es una lección que te acerca un paso más a la victoria",
    "La suerte es como una mariposa; déjala volar y volverá a posarse en tu hombro",
    "Sé amable con los demás y la suerte te seguirá a donde quiera que vayas",
    "La fortuna llega a aquellos que saben esperar con paciencia y trabajar con diligencia",
    "El universo conspira a tu favor cuando crees en ti mismo y en tus sueños",
    "La suerte es el resultado de la preparación y la oportunidad cruzándose en el momento adecuado",
    "No temas a los cambios; a menudo llevan consigo la llave hacia nuevas oportunidades",
    "La vida te dará exactamente lo que necesitas en el momento perfecto",
    "Cada día es una nueva oportunidad para sembrar las semillas de la fortuna",
    "Nunca subestimes el poder de tus pensamientos positivos; pueden moldear tu destino"
]

// document.getElementById("alumno").innerHTML = compañeros[1];
// document.getElementById("galleta").innerHTML = suerte[1];

function abrirGalleta(){
    let alumnoAleatorio = Math.floor(Math.random()*compañeros.length);
    let suerteAleatoria = Math.floor(Math.random()*suerte.length);

    document.getElementById("alumno").innerHTML = compañeros[alumnoAleatorio];
    document.getElementById("galleta").innerHTML = suerte[suerteAleatoria];

    document.querySelector("#title1").style.display = "block";
    document.querySelector("#title2").style.display = "block"
}
