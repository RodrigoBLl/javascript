//Esctructura de control if-else()
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad")
}

//Estrucutra de control if-else-if
let hora = 14

if (hora < 12) {
    console.log("Buenos dias");
} else if (hora >= 12 && hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

//Estrucutra de control switch
let diaDeLaSemana = 3;
let nombreDelDia;

switch (diaDeLaSemana) {
    case 1:
        nombreDelDia = "Lunes";
        break;
    case 2:
        nombreDelDia = "Martes";
        break;
    case 3:
        nombreDelDia = "Miercoles";
        break;

    default:
        nombreDelDia = "Otro dia";
        break;
}

console.log("Hoy es " + nombreDelDia);

//Estructura de control for()
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: "+i);
}

//Estructura de control while()
let contador=0;
while (contador<3) {
    console.log("El valor del contador es:" + contador);
    contador++;
}