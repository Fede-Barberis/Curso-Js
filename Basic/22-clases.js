// CLases (objetos complejos) => plantillas para objetos

class Person {

    constructor (name, age, apellido) {
        this.name = name
        this.age = age
        this.apellido = apellido
    }
}

// Sintaxis
let person = new Person("fede",19,"barebris")
console.log(person)

// Valores por defecto

class DefaultPerson {

    constructor (name = "Sin nombre", age = 0, apellido =  "Sin apellido") {
        this.name = name
        this.age = age
        this.apellido = apellido
    }
}

let person3 = new DefaultPerson("Fede",19)
console.log(person3)


// Acceso a propiedades
console.log(person3.apellido)
console.log(person3["apellido"])

// Modificacion de atributos

person3.apellido = "barberis"
console.log(person3.apellido)


// Funciones en clases

class PersonWithMethod {

    constructor (name, age, apellido) {
        this.name = name
        this.age = age
        this.apellido = apellido
    }

    camina() {
        console.log("la persona camina")
    }
}

let person4 = new PersonWithMethod("fede",20,"barebris")
person4.camina()


// Propiedades privadas
// Para que un atribtuo sea privado debe especificarse antes del construtor la variable con la # (#bank).
class PrivatePerson {

    #bank

    constructor (name, age, apellido, bank) {
        this.name = name
        this.age = age
        this.apellido = apellido
        this.#bank = bank
    }

    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson("fede",20,"barebris", "sdj423l42j5")

// console.log(person5.bank) // No se puede acceder para imprimirla, menos para modificarla
// person5.bank = "jfrjr5ijo34" // Esta forma crea una nueva variabvle bank, no modifica la variable privada
// console.log(person5.bank) // bank no es bank

// Getters y Setters

class GetSetPerson {

    #name 
    #age 
    #apellido
    #bank

    constructor (name, age, apellido, bank) {
        this.#name = name
        this.#age = age
        this.#apellido = apellido
        this.#bank = bank
    }

    get name() { // Metodo que muestra el nombre, (da la posibilidad de leerlo, pero no de escribirlo)
        return this.#name
    }

    set bank(newBank) { // Metodo que modifica la variable, (lo modifica, no la lee)
        this.#bank = newBank
    }
}

let person6 = new GetSetPerson("fede",19,"barberis", "FEDE123456")

console.log(person6)
console.log(person6.name)

person6.bank = "new hola123456"
console.log(person6.bank)


// Herencia
// heredar propidades y comportamineto de una clase

class Animal {

    constructor(name) {
        this.name  = name
    }

    sonido() {
        console.log("emite un sonido generico")
    }
}

// La palabra "super" se utliza cuando queremos acceder a alguna propiedad o metodo de la clase padre
// cuando es una variable = super(variable)
// cuando es un metodo = super.metodo()

class Perro extends Animal {

    sonido() {
        console.log("guauu")
    }

    corre() {
        console.log("El perro corre")
    }

}

class Pez extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    nada() {
        console.log("El pez nada")
    }

}

// ===============================================================================================================================================

let myPerro = new Perro ("rocky")
console.log(myPerro)
myPerro.corre()
myPerro.sonido()

let myPez = new Pez("Golden")
console.log(myPez)
myPez.nada()
myPez.sonido()

let myPez2 = new Pez("fish", 10)
console.log(myPez2)
myPez2.nada()
myPez2.sonido()

// ===============================================================================================================================================

// Metodos estaticos

class MathOperations {

    static sum(a, b){
        return a + b
    }
}

// Al ser estatica no hace falta instanciarla, se accede directamente
// let myClass = new MathOperations()
// console.log(myClass.sum(5, 7))

console.log(MathOperations.sum(5,5))