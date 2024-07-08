// Ciclo while
// La condición se checa antes de ejecutar instrucciones
/*
// Imprimir números del 1 al 10
let i=1;
while( i<10 ) {
    console.log(i);
    i++;
}

// Imprimir los primeros 20 multiplos de 5
var n=1;
while( n <= 20 ){
    console.log(n)
    console.log(n*5);
    n++;
}
*/

// Ciclo do-while

// La condición se checa después de ejecutar instrucciones
/*
var i = 1;
do {
    console.log(i);
    i++;
} while(i < 10); // Lleva ;, instrucciones al final
*/

// Ciclo for

// Imprimir números del 0 al 9
for( let i=0; i<10; i++ ) 
    console.log(i); 
    // Si el bloque de código sólo tiene una instrucción no son necesarias las llaves

// Ciclo While equivalente:
if(true) {
    var c = 0;
    while ( c<10 ) {
        console.log(c);
        c++;
    }
}
console.log(c);

// Imprimir números del 100 al 1
for(let i=100; i>0; i-- )
    console.log(i)



// Ejercicios
// Queremos calcular el factorial de un número
// Nuestra calculadora solo admite números hasta el 90000
// 1*2*3*4 -> fact(4)

var n=1; // n*1*2*3*4
var usuario=90120;
var banderitaNumeroMayor = false
for(let i=1; i<=usuario && n*i<=90000; i++) { // 1,2,3,4,5,...,usuario+1
    n*=i;
    console.log(n)
    console.log(i)
    if (n*i > 90000)
        banderitaNumeroMayor=true
}

if (banderitaNumeroMayor == false )
    console.log("El resultado es: ", n);
else
    console.log("No se pudo calcular el resultado");