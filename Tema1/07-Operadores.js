// Operador '+': Suma
let suma = 5 + 3;
console.log("Suma: 5 + 3 =", suma); // Salida: Suma: 5 + 3 = 8

// Operador '-': Resta
let resta = 10 - 2;
console.log("Resta: 10 - 2 =", resta); // Salida: Resta: 10 - 2 = 8

// Operador '*': Multiplicación
let multiplicacion = 4 * 2;
console.log("Multiplicación: 4 * 2 =", multiplicacion); // Salida: Multiplicación: 4 * 2 = 8

// Operador '/': División
let division = 16 / 2;
console.log("División: 16 / 2 =", division); // Salida: División: 16 / 2 = 8

// Operador '%': Módulo
let modulo = 10 % 3;
console.log("Módulo: 10 % 3 =", modulo); // Salida: Módulo: 10 % 3 = 1

// Operador '**': Potencia
let potencia = 2 ** 3;
console.log("Potencia: 2 ** 3 =", potencia); // Salida: Potencia: 2 ** 3 = 8

// Operador '++': Incremento
let incremento = 7;
incremento++;
console.log("Incremento: 7++ =", incremento); // Salida: Incremento: 7++ = 8

// Operador '--': Decremento
let decremento = 9;
decremento--;
console.log("Decremento: 9-- =", decremento); // Salida: Decremento: 9-- = 8


// Operador '==': Igualdad
let igualdad = (5 == '5');
console.log("Igualdad: 5 == '5' ->", igualdad); // Salida: Igualdad: 5 == '5' -> true

// Operador '!=': Desigualdad
let desigualdad = (5 != '6');
console.log("Desigualdad: 5 != '6' ->", desigualdad); // Salida: Desigualdad: 5 != '6' -> true

// Operador '===': Igualdad estricta
let igualdadEstricta = (5 === 5);
console.log("Igualdad estricta: 5 === 5 ->", igualdadEstricta); // Salida: Igualdad estricta: 5 === 5 -> true

let noIgualdadEstricta = (5 === '5');
console.log("Igualdad estricta: 5 === '5' ->", noIgualdadEstricta); // Salida: Igualdad estricta: 5 === '5' -> false

// Operador '!==': Desigualdad estricta
let desigualdadEstricta = (5 !== '5');
console.log("Desigualdad estricta: 5 !== '5' ->", desigualdadEstricta); // Salida: Desigualdad estricta: 5 !== '5' -> true

// Operador '>': Mayor que
let mayorQue = (10 > 5);
console.log("Mayor que: 10 > 5 ->", mayorQue); // Salida: Mayor que: 10 > 5 -> true

// Operador '<': Menor que
let menorQue = (5 < 10);
console.log("Menor que: 5 < 10 ->", menorQue); // Salida: Menor que: 5 < 10 -> true

// Operador '>=': Mayor o igual que
let mayorOIgualQue = (10 >= 10);
console.log("Mayor o igual que: 10 >= 10 ->", mayorOIgualQue); // Salida: Mayor o igual que: 10 >= 10 -> true

let mayorOIgualQue2 = (10 >= 5);
console.log("Mayor o igual que: 10 >= 5 ->", mayorOIgualQue2); // Salida: Mayor o igual que: 10 >= 5 -> true

// Operador '<=': Menor o igual que
let menorOIgualQue = (5 <= 10);
console.log("Menor o igual que: 5 <= 10 ->", menorOIgualQue); // Salida: Menor o igual que: 5 <= 10 -> true

let menorOIgualQue2 = (10 <= 10);
console.log("Menor o igual que: 10 <= 10 ->", menorOIgualQue2); // Salida: Menor o igual que: 10 <= 10 -> true


// Operador '&&' (and): ambas condiciones tienen que cumplirse
let andExample = (5 > 3 && 8 > 5);
console.log("5 > 3 && 8 > 5 ->", andExample); // Salida: true (ambas condiciones son verdaderas)

andExample = (5 > 3 && 2 > 5);
console.log("5 > 3 && 2 > 5 ->", andExample); // Salida: false (una condición es falsa)

// Operador '||' (or): solo una condición debe cumplirse
let orExample = (5 > 3 || 2 > 5);
console.log("5 > 3 || 2 > 5 ->", orExample); // Salida: true (una de las condiciones es verdadera)

orExample = (5 < 3 || 2 > 5);
console.log("5 < 3 || 2 > 5 ->", orExample); // Salida: false (ambas condiciones son falsas)

// Operador '!' (not): invierte el valor booleano
let notExample = !(5 > 3);
console.log("!(5 > 3) ->", notExample); // Salida: false (invierte el valor de true a false)

notExample = !(5 < 3);
console.log("!(5 < 3) ->", notExample); // Salida: true (invierte el valor de false a true)
