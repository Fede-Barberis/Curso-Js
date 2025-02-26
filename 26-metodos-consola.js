// Console 

// Log
console.log("Hola javaScript")

// Error
console.error("Este es un mensaje de error")
console.error("Error al conectarse a la base de datos: ", new Error("Conexion fallida"))

// Warn
console.warn("Este es un mensaje de advertencia")

// Info
console.info("Este es un mensaje de informacion adicional")

// Table

let data = [
    ["fede", 19],
    ["nico", 22],
    ["vicky", 16]
]

console.table(data)

data = [
    {name: "fede", age: 19},
    {name: "nico", age: 22},
    {name: "vicky", age: 16}
]

console.table(data)

// Group 
console.group("Usuario:")
console.log("Nombre: fede")
console.log("edad: 19")
console.groupEnd()

// Time
console.time('tiempo de ejecucion 1')
for (let i= 0 ; i < 10000; i++){
}

console.time('tiempo de ejecucion 2')
for (let i= 0 ; i < 10000; i++){
}

console.timeEnd('tiempo de ejecucion 2')
console.timeEnd('tiempo de ejecucion 1')

// Assert (muestra un msj de error si lo que evalua es false)
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// Count
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")
console.count("Click")
console.count("Click")

// Trace (es el seguimiento de la pila de ejecucion)
console.trace("seguimineto de la ejecucion")

function funcA () {
    funcB()
}

function funcB () {
    console.trace("seguimineto de la ejecucion")
}

funcA()

// Clear
console.clear()