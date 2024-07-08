// Ejercicio 1
var n = 0.99999999999999;

if( n > 0){
    console.log("La variable es positiva");
}
else if(n < 0){
    console.log("La variable es negativa");
}
else {
    console.log("La variable es cero");
}

// Ejercicio 2
if( n >= 1 && n <= 5 ) {
    console.log("La variable se encuentra entre 1 y 5");
}
else {
    console.log("La variable NO se encuentra entre 1 y 5");
}


// Ejercicio 3
var str1 = "hola";
var str2 = "HOLA";

if(str1 == str2)
    console.log("Son iguales");
else
    console.log("NO son iguales");

// Ejercicio 4
// Imprime los primeros 10 múltiplos de 147
for(let i=1; i<=10; i++)
    console.log(i*147)

// Crea un ciclo do-while que se ejecute una sola vez
do{
    console.log("Se imprime algo")
}while( false );

// Crea un ciclo for donde sumes todos los números del 1 al 100
var suma = 0;
for(let i=1; i<=100; i++)
    suma+=i;

console.log(suma);