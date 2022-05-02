/*FUNCIONES*/

//Función para imprimir por consola un salto de linea
/*function motrarSaltoDeLinea () {
    console.log("\n"); //Imprime el salto de linea
}

console.log("Probando");
motrarSaltoDeLinea ();
console.log("mi");
motrarSaltoDeLinea ();
console.log("Función");*/

//FUNCION PARA SALUDAR AL USUARIO
//FUNCIÓN QUE NO RETORNA Y RECIBE UN PARÁMETRO
/*function saludar (nom) {
    console.log("Hola "+ nom);
}

saludar();
saludar("ALBERTO");
saludar("SANDRA","ALBERTO");*/

//FUNCIÓN QUE NO RECIBE PARÁMETROS Y RETORNA UN NUMERO RAMDOM
/*console.log (Math.random());
let miOtroRamdom = Math.random();
console.log(miOtroRamdom)*/

//FUNCIÓN QUE RECIBE PARÁMETROS (MINIMO, MAXIMO) Y RETORNA UNA VARIABLE (edad)
/*function leerEnteroEntre(mensaje,minimo,maximo){
    let entero = parseInt(prompt (mensaje));
    while(entero <minimo || entero > maximo){
        entero = parseInt(prompt("ERROR. "+ mensaje));
    }
    return entero;
}

let edad = leerEnteroEntre("Ingrese una edad",1,120);
console.log("Obtuvimos un "+edad)
let notaExamen = leerEnteroEntre("Ingrese una nota",1,10);
console.log("Obtuvimos un "+notaExamen);
let tempEnAlaska = leerEnteroEntre("ingrese una temperatura",-50,0);
console.log("Obtuvimos un "+tempEnAlaska)*/

//
function leerEnteroEntre(mensaje,minimo,maximo){
    let entero = parseInt(prompt (mensaje));
    while(entero <minimo || entero > maximo){
        entero = parseInt(prompt("ERROR. "+ mensaje));
    }
    return entero;
}

function esPar(num){
    return num % 2 == 0; //Retorna T o F
}

let  numero = leerEnteroEntre("Ingrese un numero positivo",1,1000000);
if (esPar(numero)){
    console.log ("El número es par");
} else {
    console.log("El número es impar")
}

