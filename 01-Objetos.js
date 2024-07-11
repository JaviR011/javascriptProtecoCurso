console.log()

const persona = {
    nombre: "Juan",
    edad: 25,
    profesion: "Programador"
  };

console.log(persona.nombre)

console.log(typeof persona)

console.log(persona["edad"])

const personaFunc = {
    nombre: "Juan",
    edad: 25,
    profesion: "Programador",
    saludar: function (a){
        console.log("Hola soy",this.nombre,a)
    }
  };

personaFunc.saludar(1);



const calculadora = {
    sumar: function(a, b) {
      return a + b;
    },
    restar: function(a, b) {
      return a - b;
    },
    multiplicar: function(a, b) {
      return a * b;
    },
    dividir: function(a, b) {
      return a / b;
    }
  };

console.log(calculadora.restar(10,2))



const producto = {
    nombre: "Camiseta",
    precio: 29.99,
    cantidad: 10,
    obtenerTotal: function() {
      return this.precio * this.cantidad;
    }
  };

  //==================MODIFICACION DE ATRIBUTOS===================

  console.log(producto.obtenerTotal()); 
  
  console.log(producto.nombre)

  producto.nombre="Camiseta polo"

  console.log(producto.nombre)

    //==================AGREGAR ATRIBUTOS===================

  producto.folio=12

  console.log(producto)


  facturas={
    10:"m",
    20:"e",
    30:"a",
    40:"z"
  }


  console.log(facturas[1])
  console.log(facturas.lenght)

  for (let i = 1; i <= 5; i++) {
    console.log(facturas[i]);
  }

  for (let propiedad in facturas) {
    console.log(propiedad + ": " + facturas[propiedad]);
  }


  //=============================== LISTA  ===================

const lista = ["manzana", "naranja", "plátano", "uva"];

console.log(lista[0]); // Resultado: "manzana"
console.log(lista[2]); // Resultado: "plátano"
console.log(lista.length); // Resultado: 4

lista[0]="primero"

console.log(lista)



const lista2 = ["manzana", "naranja", "plátano"];
const ultimoElemento = lista.pop();
console.log(lista); // Resultado: ["manzana", "naranja"]
console.log(ultimoElemento); // Resultado: "plátano"

//==========SLICE===================

const lista3 = ["manzana", "naranja", "plátano", "uva", "sandía"];
const porcion = lista.slice(1, 4);
console.log(porcion); // Resultado: ["naranja", "plátano", "uva"]

//================PUSH==================
lista3.push("push")
console.log(lista3)

//========================INDEXOF====================
console.log(lista3.indexOf("push"))



const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matriz[0]); // Resultado: [1, 2, 3]
  console.log(matriz[1][2]); // Resultado: 6
  
  matriz[2][1] = 10;
  console.log(matriz); // Resultado: [[1, 2, 3], [4, 5, 6], [7, 10, 9]]
  

  const matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[i].length; j++) {
      console.log(matriz1[i][j]);
    }
  }
  

  function combinarArreglos(arreglo1, arreglo2) {
    return arreglo1.concat(arreglo2);
  }

  const frutas = ["manzana", "naranja", "plátano"];
  const verduras = ["zanahoria", "brócoli", "espinaca"];
  const alimentos = combinarArreglos(frutas, verduras);
  console.log(alimentos);


  function dobletear(a){
    for (let j = 0; j < a.length; j++) {
        a[j]=a[j]*2
      }
  }

  let ar=[1,2,3,4,5]

  dobletear(ar)

  console.log(ar)




  function encontrarMaximo(arreglo) {
    let maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
        maximo = arreglo[i];
      }
    }
    return maximo;
  }
  
  const numeros = [10, 5, 25, 8, 12];
  console.log(encontrarMaximo(numeros));