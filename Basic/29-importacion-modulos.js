// Importacion de modulos

import { Circulo, name, pi, suma } from "./28-exportacion-modulos.js";

import DefaultImport from "./28-exportacion-modulos.js";

// Funciones
console.log(suma(5,10))

// Propiedades
console.log(pi)
console.log(name)

// Clases
let circulo = new Circulo(10)
console.log(circulo.radio)
console.log(circulo.area().toFixed(2)) // toFixed sirve para sacar los decimales o especificar cuantos queremos
console.log(circulo.perimetro().toFixed(2))

// Importacion por defecto
console.log(DefaultImport(5,10))

// let myClass = new DefaultImport()
// myClass.func()


// Proyecto modular

// import {myImport} from "./directory/file.js"

