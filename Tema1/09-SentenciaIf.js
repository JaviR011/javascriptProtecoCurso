

let condicion = true;

if(condicion){
    console.log("La condición es verdadera :)");
}else{
    console.log("La condición es falsa :(");
}

let num = 2;

if(num > 0){
    console.log(num + " es mayor a cero");
}else{
    console.log(num + " no es mayor a cero :C");
}

let num2 = 19;

// -infinito ----- 0 ----- 17 ----- infinito
if(num2 > 0  && num2 < 18){ // || OR
    console.log("Eres menor de edad.");
}else{
    console.log("Eres mayor de edad");
}

// --------------  Ejemplo anidar ifs ------------------
let num3 = "2";

if( num3 === 1){
    console.log("El número es uno :)");
}else if( num3 === 2){
    console.log("El número es 2.");
}else if( num3 == 3){
    console.log("El número es 3 :D");
}else if( num3 == 4 ){
    console.log("El numero es 4");
}else{
    console.log("Numero desconocido.");
}

