// Funciones avanzadas

//! Ciudadanos de primera clase

//* le asignamos a una constante una funcion
const saludo = function (name) {
    console.log(`hola, ${name}`)
}
saludo("fede")

//* le pasamos una funcion como parametro a una funcion 
function procesarSaludo (saludoFuncion, name) {
    saludoFuncion(name)
}

//* retornamos a traves de una funcion otra funcion
function returnSaludo (name) {
    return saludo
}
procesarSaludo(saludo, "nico")

//* creamos otra constante que es igual a una funcion la cual devuelve otra funcion
const saludo2 = returnSaludo()
saludo2("vito")


//! Arrows functions avanzadas

//* - Retorno implicito
const multiplicacion = (a, b) => a * b
console.log(multiplicacion(2,2))

//* - This léxico
const manejador = {
    name: "fede",

    saludo: function () {
        console.log(`hola, ${this.name}`) // Esta funcion, si hereda el this de su contexto
    },

    arrowSaludo: () => {
        console.log(`hola, ${this.name}`) // Estas arrows function crean su propio contexto del this
    }
}

manejador.saludo()
manejador.arrowSaludo();


//! IIFE (Expresion de Funcion Invocada Inmediatamente)
//? forma de obligar a ejecutar un codigo en concreto y no contamina el ambito global.
//? se ejecutan en le momento que se definan.

//* - IIFE clásico
//? para ejecutarse necesita que la linea arriba suyo finalice en ; para saber donde termina la ejecucion anterior.

(function () {
    console.log("IFFE clasico")
})();

//* - IIFE Arrow Function
(() => {
    console.log("IIFE con arrow function")
})();


//! Parametros Rest (...)
//? el parametro rest genera automaticamente un array con los parametros
//? se utiliza cuando no se cuantos parametros le voy a pasar

function sum(...numbers) {
    let result = 0
    for(let num of numbers) {
        result += num
    }
    return result
}

console.log(sum(1,2,3,4,5)) // 5 parametros
console.log(sum(10, 15)) // 2 parametros


//! Operador Spread (...)
//? sirve para expandir los elementos de un array, o los argumentos en un objetos, etc.

const numbers = [6,2,4,4,5,6]

function sumConSpread(a,b,c) {
    return a + b + c 
}

console.log(sumConSpread(1, 2, 3)) // sin spread
console.log(sumConSpread(...numbers)) // con spread


//! Closures (Clausuras)
//? ocurre cunado una funcion interna accede a variables de la funcion externa. 

function createCouter () { // funcion externa
    let counter = 0
    return function () { // funcion interna
        counter ++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCouter()
counter()
counter()
counter()


//! Recursividad
// funcion que se llama a si misma. Pero necesita una condicion para finalizarse

function factorial (n) {
    if (n <= 1){
        return 1
    }
    return n * factorial(n -1)
}

console.log(factorial(5))


//! Funciones Parciales
//? Idea de dividir una funcion con varios parametros en funciones mas pequeñas que reciben parte de los parametros y retornan una nueva funcion
//? que espera los siguientes parametros.

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(5)
console.log(sumWith(3,4))
console.log(sumWith(1,2))


//! Currying
//? transformar una funcion que recibe varios parametros en una funcion que va a recibir uno a la vez.

function currySum (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

// const sumAB = currySum(2)(3) // almacena en sumAB la suma de A + B 
// console.log(sumAB(6)) // muestro por pantalla la suma de la variable sumAB + C
// console.log(sumAB(2)) 

// const sumA = currySum(3)
// console.log(sumA(4)(5))

const sumAB = currySum(2)(3) 
const sumC = sumAB(5)
console.log(sumC(6)) 
console.log(sumAB(6)(4)) 


//! Callbacks
//? a una funcion le pasamos otra funcion como argumento y personalizamos su comportamiento

function procesarDatos(data, callback) {
    const result = sum(...data)
    callback(result)
}

function procesarResultado (result) {
    console.log(result)
}

function procesarResultado2 (result) {
    console.log(`Mi resultado es: ${result}`)
}

procesarDatos([1, 2, 3], procesarResultado)

procesarDatos([1, 2, 3], procesarResultado2)

procesarDatos([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
})