// 9. Exporta una función, una constante y una clase desde una carpeta

export function restar(a=0, b=0) {
    return a - b
}

export const hervimiento = 100

export class Animal {

    constructor(especie, nombre){
        this.especie = especie
        this.nombre = nombre
    }
}

