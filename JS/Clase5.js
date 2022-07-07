//PARADIGMA ORIENTADO A OBJETOS
let v1 = "Carlos";
let v2 = 50;
let v3 = 3.14;
let v4 = false;
let v5 = {
    //Atributos del Objeto
    nombre: "Carlos",
    apellido: "Cimino",
    anioNacimiento: 1979,
    tieneHijos: false,
    domicilio: {
        calle: "Campana",
        altura: 1202,
        barrio: "Villa del Parque",
        comoCadena: function (){return this.calle + " " + this.altura + " " + this.barrio}
    },
    //Metodos del Objeto
    nombeCompleto: function() {return this.nombre + " " + this.apellido},
    edad: function() {return anioAtual() - this.anioNacimiento},
    presentarse: function() {console.log("Hola soy "+this.nombeCompleto()+ " y tengo "+this.edad()+" y vivo "+this.domicilio.comoCadena())},
}; //OBJETO

let otrov5 = v5;

/*console.log(typeof v1);
console.log(typeof v2);
console.log(typeof v3);
console.log(typeof v4);
console.log(typeof v5);
console.log(typeof v5.domicilio);

console.log(v5.nombeCompleto());
console.log(v5.edad());
v5.presentarse();*/
