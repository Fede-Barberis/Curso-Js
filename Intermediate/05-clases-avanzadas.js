// Clases avanzadas

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    saludar() {
        console.log(`hola, soy ${this.name}`);
    }
}

const person = new Person("fede", 19)
console.log(person)
person.saludar()

person.mostrarEdad = function () { // le agrego una nueva funcion a la clase persona.
    console.log(`tengo, ${this.age} años`)
}

console.log(person)
person.mostrarEdad()

//?===================================================================================================================================================

//! - Clases abstractas


//! - Abstraccion

class Animal {
    constructor (name) {
        if(new.target === Animal) {
            throw new Error("No se puede instancia una clase abstracta.")
        }
        this.name = name
    }

    sonido () {
        throw new Error("Este metodo debe ser implementado por la subclase.")
    }
}

// Error
// let animal = new Animal("vito")
// console.log(animal)

//?===================================================================================================================================================

//! - Polimorfismo
// permite implementar metodos con el mismo nombre pero con un comportamiento diferente.

class Gato extends Animal {
    sonido() {
        console.log("Miau");
    }
}

class Perro extends Animal {
    sonido() {
        console.log("Guau");
    }
}

const gato = new Gato("oreo")
console.log(gato)
gato.sonido()

const perro = new Perro("rocky")
console.log(perro)
perro.sonido()

//?===================================================================================================================================================

//! - Mixins
// permite compartir funcionalidades entre diferentes clases sin utilizar la herencia.

const VolarMixin = {
    volar() {
        console.log(`${this.name} esta volando`);
    }
} 

class Pajaro extends Animal {}

class Dragon extends Animal {}

Object.assign(Pajaro.prototype, VolarMixin)
Object.assign(Dragon.prototype, VolarMixin)

const pajaro = new Pajaro("rio")
console.log(pajaro.name);
pajaro.volar()

const dragon = new Dragon("chimuelo")
console.log(dragon.name);
dragon.volar()

//?===================================================================================================================================================

//! - Patrones de diseño
// convenciones que podemos seguir para resolver problemas comunes.

//! - Patron Singleton
// hace que una clase solo se pueda instanciar una unica vez.

class Sesion {
    constructor (name) {
        if(Sesion.instance) {
            return Sesion.instance
        }
        this.name = name
        Sesion.instance = this
    }

    clear() { // forma de setear la instancia
        delete(Sesion.instance)
    }
}

const sesion1 = new Sesion("fede barberis")
const sesion2 = new Sesion("")
console.log(sesion1.name)
console.log(sesion2.name)

sesion1.clear()

const sesion3 = new Sesion("andres barberis")
const sesion4 = new Sesion("barberis")
console.log(sesion3.name)
console.log(sesion4.name)

//?===================================================================================================================================================

//! - Symbol
// propiedad unica e inmutable

const ID = Symbol("id")

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }

    getId () {
        return this[ID]
    }
}

const user = new User ("fede")
console.log(user.name);
console.log(user.ID);
console.log(user.getId())

//?===================================================================================================================================================

//! - Instanceof

class Car { }

const car = new Car()

console.log(car instanceof Car);

//* Create

const anotherCar = Object.create(Car.prototype)
console.log(anotherCar instanceof Car);

//?===================================================================================================================================================

//! - Proxy
// sirve para interceptar y personalizar el comportamiento de clases
// sirve para aplicar seguridad, validaciones, etc.

const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`);
        return target[property]
    },

    set(target, property, value) {
        if(property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }

        target[property] = value
        // console.log(target);    // instancia
        // console.log(property); // nombre propidad
        // console.log(value);    // valor propiedad
    }
}

class BankAccount {
    constructor (balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance);

account.balance = 50
console.log(account.balance);

account.balance = -10

//?===================================================================================================================================================