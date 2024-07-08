// Tipos de datos

/*
console.log("Hola!");
*/
console.log("Hola!");

// Tipo de dato numérico
let numero = 10;
console.log(numero);
console.log(typeof numero);

// Tipo de dato STRING/Cadena
let cadena = "Hola :D";
let cadena2 = 'Hola 2 :)';
console.log(cadena);
console.log(typeof cadena);

// Tipos de datos booleanos
let bandera = true;
console.log(bandera);
console.log(typeof bandera);

// Las variables en JS se conocen como variables dinánicas: El tipo de dato
// de una variable ya definida puede cambiarse en tiempo de ejecución al modificarla.
bandera = 'cambio';
console.log(bandera);
console.log(typeof bandera);

// Tipo de dato undefined
let u;
console.log(u);
console.log(typeof u);

// Tipo de dato null
// Null = ausencia de valor
let N = null;
console.log(N);
console.log(typeof N);

// Tipo de dato función
function miFunction(){};
console.log(miFunction);
console.log(typeof miFunction);

// Tipo clase es una función.
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona);
console.log(typeof persona);

// Tipo de dato: Cadena vacía
let cad = "";
console.log(cad);
console.log(typeof cad);

var cade = "Hola";
console.log(cade);