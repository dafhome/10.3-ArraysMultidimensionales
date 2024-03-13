// 2- ACCESO A DATOS EN BUCLES MULTI-DIMENSIONALES
// Tienes estos dos arrays:
// const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];
// const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];
// Imprime en consola o pantalla:
// - El número 26, el numero 134, el numero 92
// - El nombre "Rosa", el nombre "Roberto"
// - Todos los nombres de mascotas, a) en una línea y b) en diferentes líneas

const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];
const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];

let resultado26 = medidas[2][2][1];
let resultado134 = medidas[0][1];
let resultado92 = medidas[2][3];

document.getElementById("resultado1").innerHTML += resultado92+", "+resultado134+", "+resultado92;


let rosa = nombres[2][1];
let roberto = nombres[1][2];

document.getElementById("resultado2").innerHTML += rosa+", "+roberto;

let mascotas = nombres[0];
let personas = nombres[1];