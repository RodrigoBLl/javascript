//Estructura for() con arreglos

let numeros = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numeros.length; i++) {
    console.log("Numero en la posición " + i + " : " + numeros[i]);
}

//Estructura forEach() con arreglos
let frutas = ['Manzana', 'Plátano', 'Fresa', 'Uva'];

frutas.forEach(function (fruta, indice) {
    console.log('En el índice ' + indice + ' hay una ' + fruta);
});
