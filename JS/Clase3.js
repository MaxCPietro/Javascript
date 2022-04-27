/*IF ANIDADO*/
/*
let numero = parseInt(prompt("Pone un numero entero"));

if (numero >0) {
    console.log(numero + " es positivo")
} else if (numero < 0) {
    console.log(numero + " es negativo")
} else {
    console.log(numero + " es neutro")
}
*/

/* While*/
/*let veces = 5;
let contador = 1;
while (contador <= veces){
    console.log(contador + " Hola mundo de los ciclos");
    contador = contador + 1;
}
console.log("Adios")
*/

/*FOR*/
/*let veces = 5;
let contador = 1;
for (let contador = 1; contador <= veces; contador++) {
   console.log(contador + "Hola Mundo de los Ciclos con Fort");
}
*/

/*El usuario ingresa cuantro números. La computadora dice cual fue el mayor (se supone único) y en qué posición aparecio.
EJ --> Ingresa 4 7 5 3 El mayor fue 7 en la pos 2 */
//let numero;
//let maximo = Number.MIN_SAFE_INTEGER; //el menor numero posible
/*let maximo = parseInt(prompt("Ingrese un nro entero"));
let posMaximo=1;
for (let cont = 1;cont<= 4;cont++){
    numero = parseInt(prompt("Ingresa un numero entero"));
    if (numero > maximo) {
        maximo=numero;
        posMaximo=cont;
    }
}
console.log("El maximo fue "+maximo + " en la posición "+posMaximo);*/

/*El usuario ingresa su edad (Entre 1 y 120)*/
let edad = parseInt(prompt("ingrese su edad [1 y 120]"));
while (edad <1 || edad >120) {
    edad = parseInt(prompt("ERROR!- ingrese su edad [1 y 120]"));
}
console.log("La edad fue validada. Es: "+edad);