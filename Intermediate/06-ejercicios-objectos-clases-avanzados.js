// 1. Agregega una función al prototipo de un objeto
function Car (color){
    this.color = color 
}

Car.prototype.acelerar = function () {
    console.log("el auto esta acelerando");
}

const car = new Car("azul")
car.acelerar()

// 2. Crea un objeto que herede de otro
let estudiante = {
    nombre: "fede",
    edad: 19
}

let programador = Object.create(estudiante) // programador hereda de estudiante
console.log(programador.nombre);
console.log(programador.edad);
programador.exp = "junior"

console.log(programador.exp);

// 3. Define un método de instancia en un objeto

// 4. Haz uso de get y set en un objeto


// 5. Utiliza la operación assign en un objeto

// 6. Crea una clase abstracta
class Vehiculo {
    constructor(tipo) {
        if(new.target === Vehiculo) {
            throw new Error("No se puede instanciar una clase abstracta.")
        }
    }
}
//const mustang = new Vehiculo("auto")

// 7. Utiliza polimorfismo en dos clases diferentes
class Animal {
    constructor(name) {
        this.name = name
    }

    sonido () {
        console.log("sonido");
    }
}

class Pato extends Animal {
    sonido () {
        console.log("Quack");
    }
}

class Lobo extends Animal {
    sonido (){
        console.log("Aauuuuu");
    }
}

const pato = new Pato("patito")
const lobo = new Lobo("wolf")
pato.sonido()
lobo.sonido()

// 8. Implementa un Mixin
const ComerMixin = {
    comer() {
        console.log(`${this.name} esta comiendo`);
    }
}

Object.assign(Pato.prototype, ComerMixin)
Object.assign(Lobo.prototype, ComerMixin)

pato.comer()
lobo.comer()

// 9. Crea un Singleton
class Dni {
    constructor(dni) {
        if(Dni.instance) {
            return Dni.instance
        }
        this.dni = dni
        Dni.instance = this
    }
}

const persona = new Dni("46539511")
console.log(persona.dni);

const persona2 = new Dni("")
console.log(persona2.dni);

// 10. Desarrolla un Proxy
const proxy = {

    get (target, property) {
        console.log(`Se accede a la propiedad ${property}`);
        return target[property]
    },

    set (target, property, value) {
        target[property] = value
    }
}