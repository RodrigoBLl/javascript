// let num = 10
// let nombre = "José"
// let esMayor = true

// console.log(num)
// console.log(nombre)
// console.log(esMayor)

// function saludar(nombre){
//     console.log("Hola " + nombre + "!")
// }

// saludar(nombre)

function sumar(num1, num2){
    let suma = num1+num2;
    console.log("La suma de "+num1+" + "+num2+" = "+suma);
}

sumar(2,2)

let persona = {
    nombre: "José",
    edad: 21,
    numeros: ["los perros","los gatos","los animales en general"],
    saludar: function(){
        console.log("Hola, soy " + this.nombre);
        console.log("Tengo "+ this.edad);
        console.log("Y me gustan "+ this.numeros[0]);
    }
}

persona.saludar();

let numeros = [1,2,3,4,5]
x=4
console.log("La longitud de la cadena es de: "+numeros.length);
console.log("El número en la posición "+ x +" es: "+numeros[x]);