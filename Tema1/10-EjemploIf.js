
let mes = 0;
let estacion;

// Invierno ---> mes 1, 2, 12
// Primavera ---> mes 3, 4, 5
// Verano ---> mes 6, 7, 8
// Otoño ---> mes 9, 10, 11

// && (AND o Y) -> Cumple las dos condiciones
// || (OR o O) -> Cumple una de las dos condiciones

if( mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
    console.log("Es ",estacion);
}else if( mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
    console.log("Es ",estacion);
}else if( mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
    console.log("Es ",estacion);
}else if( mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño";
    console.log("Viva el ",estacion);
}else if( mes <= 0 || mes > 12){
    estacion = "Mes incorrecto.";
    console.log(estacion);
}