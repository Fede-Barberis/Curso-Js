// Objetos avanzados (tecnicas antiguas)

//! - Prototipos y Herencias

//* prototipos
// mecanismo con el cual los objetos pueden heredar propiedades y funciones de otro objeto.
// cualquier objeto creado tiene un prototipo asociado.

let person = {
    name: "fede",
    age: 19,

    saludar() {
        console.log(`hola, soy ${this.name}`);
    }
}

console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));

person.mostrarEdad = function () {
    console.log(`tengo, ${this.age} años`);
}

console.log(person);
person.mostrarEdad()

//* herencia basada en prototipos
// creo un nuevo objeto a partir del que ya existe.
// hoy en dia la manera correcta de usar herencia es con las clases.

let programador = Object.create(person) // heredo todas las propiedades y funciones de persona.
programador.lenguaje = "JavaScript"

programador.name = "andres"
console.log(person.name)
console.log(person.lenguaje) // persona no posee la propiedad lenguaje

console.log(programador.name)
console.log(programador.lenguaje)
programador.saludar();
programador.mostrarEdad()

//?===================================================================================================================================================

//! - Metodos estaticos y de instancia

function Person (name, age) {  // creacion de una entidad de forma antigua
    this.name = name
    this.age = age
}

Person.prototype.saludar = function () {
    console.log(`hola, soy ${this.name}`);
}

let newPerson = new Person("fede", 19)
newPerson.saludar()

//?===================================================================================================================================================

//! - Metodos avanzados

//* assign
// sirve para copiar las propiedades de uno o mas objetos que son como la fuentes en un objeto destino. 

let personCore = {name: "fede"}
let personDetails = {age: 19, alias: "federer"}

let fullPerson = Object.assign(personCore, personDetails) // combinacion de objetos
console.log(fullPerson);

//* keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))

//?===================================================================================================================================================