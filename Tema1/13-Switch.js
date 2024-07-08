
// La declaración switch es usado para crear multiples condicionales.
// Permite ejecutar diferentes bloques de código basados en diferentes condiciones.

let edad = 18;

switch(edad){}
switch(true){}
switch("Cadena"){}
switch(5+5){}
// Declaraciones switch aceptando diferentes expresiones.

let numero = 4;
let numeroTexto = "?";

switch(numero){
    case 1:
        numeroTexto = "Numero uno";
        break;
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4: 
        numeroTexto = "Numero cuatro";
        break;
    default:
        numeroTexto = "Desconocido";
}
console.log(numeroTexto);

// ------ Ejemplo sin break
let opcion = "1";
// === / ==
switch(opcion){
    case "1":
        console.log("Opcion 1");
    case 2:
        console.log("Opcion 2");
    case 3:
        console.log("Opcion 3");
    default:
        console.log("Default / Predeterminado");
}

// El switch sólamente pued3e ser usado cuando se tiene un valor preciso para las
// condicionales.

if(numero > 2){
    console.log("El numero es mayor a 2");
}else{
    console.log("El numero es menor a 2");
}

switch(numero){
    case numero>2: // Esta comparacion retorna un booleano = TRUE
        console.log("El numero es mayor a 2");
        break;
    default:
        console.log("El numero es menor a 2");
}

// ------------------ Ejemplo estaciones del año
// Invierno ---> mes 1, 2, 12
// Primavera ---> mes 3, 4, 5
// Verano ---> mes 6, 7, 8
// Otoño ---> mes 9, 10, 11
let mes = 12;

switch(mes){
    case 1: case 2: case 12:
        console.log("Es invierno :)");
        break;
    case 3: case 4: case 5:
        console.log("Es primavera");
        break;
    case 6: case 7: case 8:
        console.log("Es verano :D");
        break;
    case 9: case 10: case 11:
        console.log("Es otoño >:D");
    default:
        console.log("Mes incorrecto");
}

// Las comparaciones que hace el switch son de tipo estricto.
// ( si compara los tipos de variable )