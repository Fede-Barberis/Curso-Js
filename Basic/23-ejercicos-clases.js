// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 4. Añade un método estático a la primera clase

class Persona {

    constructor(nombre, dni) {
        this.nombre = nombre
        this.dni = dni
    }

    indentificacion() {
        console.log(`soy ${this.nombre} y mi dni es: ${this.dni}`)
    }

    static habla() {
        console.log("hola")
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let persona1 = new Persona("fede", 46539511)
console.log(persona1.nombre)
console.log(persona1.dni)
persona1.indentificacion()

// 5. Haz uso del método estático
Persona.habla()

// 6. Crea una clase que haga uso de herencia
class Animal {

    constructor(nombre) {
        this.nombre = nombre
    }

    sonido() {
        console.log("sonido generico")
    }
}

class Gato extends Animal {

    constructor(nombre, edad) {
        super(nombre)
        this.edad = edad
    }

    sonido() {
        console.log("Miauu!")
    }
}

let gato = new Gato("oreo", 4)
console.log(gato)
gato.sonido()

// 7. Crea una clase que haga uso de getters y setters

class banco {

    #nro
    #venc
    #clave

    constructor(nro, venc, clave, ) {
        this.#nro = nro
        this.#venc = venc
        this.#clave = clave
    }

    get nro () {
        return this.#nro
    }

    set clave (newClave) {
        this.#clave = newClave
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores
let cuentaBanco1 = new banco("1234556", "08/28", 982432)
console.log(cuentaBanco1) // atributos privados, no muestra nada

console.log(cuentaBanco1.nro)

cuentaBanco1.clave = 123456
console.log(cuentaBanco1.clave)

// 10. Sobrescribe un método de una clase que utilice herencia 