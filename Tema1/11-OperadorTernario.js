
/*
Con los operadores ternarios podemos comparar o hacer una condicion
Si da TRUE regresa un dato
Si da FALSE regresa otro

Sintaxis:
let x = (CONDICION) ? VALORTRUE : VALORFALSE;

El "?" es el que indica el fin de la condicion
El ":" separa el valor que da si es verdadero o falso

*/

let x = (10 > 5) ? "Verdadero" : "Falso";
console.log(x);

let resultado = (10 > 5) ? "10 es mayor a 5" : "10 es menor a 5";

// Ejemplo ahorrando un if
let numero = 9;
resultado = (numero % 2 == 0) ? "Numero par" : "Numero impar";
console.log(resultado);