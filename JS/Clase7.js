/*EVENTOS*/

//Definición de variables
let x = document.getElementById("elTitulo");
let y = document.getElementById("elParrafo");
let inputNombre = document.querySelector("#fname");
let leyendaParrafo = document.getElementById("leyenda");
let textoAnterior;
let formulario = document.getElementById("elForm")

//FUNCIONES
function mostrar (evt) {
    //console.log("lo logramos!: Entramos a:")
    textoAnterior = evt.target.innerHTML;
    evt.target.innerHTML = "Están sobre mi :O "
}

function irse(evt) {
    console.log("Nos Fuimos de: " + evt.target.id);
    evt.target.innerHTML = textoAnterior;
}

function handleChangeName(evt){
    let cant = evt.target.value.length;
    if (cant > 0) {
        leyendaParrafo.innerHTML = "Tu nombre mide " + cant + " caracteres"
    } else {
        leyendaParrafo.innerHTML = "0 Caracteres"
    }

}

function handleForm (evt) {
    console.log("Form Enviado");
    return false
}

//EVENTOS

inputNombre.onkeyup= handleChangeName;

x.onclick = mostrar;
x.onmouseover = mostrar;
x.onmouseleave = irse;

y.onclick = mostrar;
y.onmouseover = mostrar;
y.onmouseleave = irse;

formulario.onsubmit= handleForm;