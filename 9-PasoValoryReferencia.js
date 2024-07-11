
// ============================ Paso por valor =============================
// El paso por valor es cuando utilizamos tipos que no son objetos
// como numericos, booleanos, etc.

// Tipos primitivos
let x = 10; // Valor primitivo porque no tiene ni propiedades ni métodos.

function cambiarValor(a){
    a = 20;
    return; // No es necesario agregar el return, ya que JS lo agrega automáticamente
    // pero no regresa nada.
}

// Paso por valor
cambiarValor(x); // Nadamás x pasó su valor a 'a', entonces x no cambió
console.log(x);

// ============================ Paso por referencia =============================
// Buena practica al crear un objeto es definir una variable como una constante.

const persona = { // Persona almacena una referencia a un objeto.
    nombre: "Juan",
    apellido: 'Pérez'
}

console.log()
const arreglo = [1, 2 , 3];

function cambiarValorObjeto(p1, p2,a) {
    p1.nombre = 'Carlos';
    p1.apellido = 'Ramirez';
    p2[1] = 100;
    a=20
    return;
}

// Paso por referencia
cambiarValorObjeto(persona, arreglo,x);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(arreglo[1]);
console.log(x)