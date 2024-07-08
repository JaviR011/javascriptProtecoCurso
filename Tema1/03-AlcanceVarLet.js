// Hoisting

console.log(nombre);
var nombre = "David";
console.log(nombre);

//console.log(apellido);
let apellido = "Garcia";
console.log(apellido);

function misNombres(){
    let nombre1 = "David";
    let nombre2 = "Elias";

    console.log(nombre1);
    console.log(nombre2);
}

misNombres();
//console.log(nombre2);


var apellido1 = "Perez";
var apellido2 = "Pepito";

function misApellidos(){
    apellido1 = "Cuac";
    apellido2 = "Quack";

    console.log(apellido1);
    console.log(apellido2);
}

misApellidos();
console.log(apellido2);