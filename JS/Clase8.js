/*Definición de arrays*/
//const cars = ["Saan","volvo","BMW","Ford"];

/*console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[-1]);*/

/*for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    console.log(element)
    
}

//Agregar un elemento al final del array
cars.push("Peugeot");

//Eliminar el ultimo elemento y lo retorna
const borrado = cars.pop();
console.log(borrado)*/

//LEVANTO COMPONENTES DE LA PÁGINA
const inputNombre =  document.getElementById("idNombre");
const inputApellido = document.getElementById("idApellido");
const tabla = document.getElementById("idTabla");
const btnAgregar = document.getElementById("idBtnAgregar");
const btnQuitar = document.getElementById("idBtnQuitar");
const personas = [];

//MATRICES
let Matris = [[1,"Alberto","M"],[2,"Sandra","F"],[3,"Sole","F"]];
let Matris2 = new Array();
//Agrego elementos por fila
Matris2.push(["Cabarceno 700",3,1450]);
Matris2.push(["Cabarceno 1125",5,1800]);
Matris2.push(["Cabarceno 3L",1,890]);

console.log(Matris2.length);
console.log(Matris2);
console.log(typeof Matris2);
console.log(Matris2 instanceof Array);

//Obtener toda 1 fila
console.log(Matris2[0]);
console.log(Matris2[1]);
console.log(Matris2[2]);



function handleAdd(evt){
    //Obtener datos de los inputs
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    //console.log(nombre+" "+apellido);
    //Creación y Agregación de elementos HTML
    const unaFila = document.createElement("tr");

    const dato1 = document.createElement("td");
    dato1.innerHTML=personas.length+1;

    const dato2 = document.createElement("td");
    dato2.innerHTML = nombre;
    const dato3 = document.createElement("td");
    dato3.innerHTML = apellido;

    //Agrego las columnas a la fila
    unaFila.appendChild(dato1);
    unaFila.appendChild(dato2);
    unaFila.appendChild(dato3);

    //Agrego el nombre completo al array
    personas.push(dato1.innerHTML+" "+nombre+" "+apellido);

    //Agregro la fila a la tabla
    tabla.appendChild(unaFila);
    tabla 
}

function handleRemove(evt){
    //Elimino del Array
    personas.pop();
    tabla.removeChild(tabla.lastChild);
    
}
btnAgregar.onclick=handleAdd;
btnQuitar.onclick=handleRemove;