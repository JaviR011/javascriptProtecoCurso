/*

++ Incremento
-- Decremento


+= 
-=
==
===
!=
*/

let a = 3, b = 2;
let z = a + b;

console.log(z);

// Incremento
// Pre-incremento (el operador ++ va antes de la variable)

z = ++a; // Primero se aumenta en uno la variable a, y luego se incrementa en z 
console.log(a);
console.log(z);

// Post-incremento (el operador ++ va después de la variable)
z = b++; //  Primero se le asigno a z la variable b, y luego le incremento a b en 1
console.log(b);
console.log(z);


// Decremento

// Pre-drecremento
z = --a; // Primero se decrementa a, y luego se asigna.
console.log(a);
console.log(z);

// Post-decremento
z = b--; // Primero se asignó b a z, y luego se decrementa en 1
console.log(b);
console.log(z);
