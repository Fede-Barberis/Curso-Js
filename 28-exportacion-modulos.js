// Exportacion de modulos

// Funciones

export function suma(a, b){
    return a + b
}

console.log(suma(5,10))

// Propiedades

export const pi = 3.1416
export let name = "Fede"

// Clases

export class Circulo {
    constructor(radio) {
        this.radio = radio
    }

    area() {
        return Math.PI * Math.pow(this.radio, 2)
    }

    perimetro () {
        return 2 * Math.PI * this.radio
    }
}

// Exportacion por defecto tiene que ser unica
export default function resta (a, b){
    return a - b
}

/* export default class myClass {

        func(){
            console.log("mi clase")
        }
} */