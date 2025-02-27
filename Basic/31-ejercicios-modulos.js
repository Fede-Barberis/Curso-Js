// 1. Exporta una función
export function multiplicar(a, b) {
    return a * b
}

// 2. Exporta una constante
export const PI= 3.1416

// 3. Exporta una clase
export class Person {

    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

// 4. Importa una función
import {multiplicar} from "./31-ejercicios.modulos.js"
console.log(multiplicar(5,5))

// 5. Importa una constante
import {PI} from "./31-ejercicios.modulos.js"

// 6. Importa una clase
import {Person} from "./31-ejercicios.modulos.js" 
persona1 = new Person("fede", 19)
console.log(persona1)

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
// solamente se puede realizar una unica exportarcion por default 

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
// solamente se puede realizar una unica exportarcion por default 

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { Animal, hervimiento, restar } from "../Exportarcion/exportar.js"
