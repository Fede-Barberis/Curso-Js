// Funciones

// Simple
function myFunc() {
    console.log("hola funcion")
}

myFunc()

// Con parametros
function myFuncConParametros(name) {
    console.log(`hola, ${name}`)
}

myFuncConParametros("fede")


// Funciones anonimas
const myFunc2 = function(name) {
    console.log(`hola, ${name}`)
}

myFunc2("fede")


// Arrow functions (funciones flechas)
const myFunc3 = (name) => {
    console.log(`hola, ${name}`)
}

const myFunc4 = (name) => console.log(`hola, ${name}`)

myFunc3("federico")
myFunc4("federico")


// Parametros
function suma(a, b) {
    console.log(a+b)
}

suma(5,8)


// Por defecto 
function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum(4)
defaultSum()
defaultSum(5, 10)


// Retorno de valores
function mult(a, b) {
    return a * b
}

console.log(mult(5, 5))

let result = mult(5, 5)
console.log(result)


// Funciones anidadas
function externa() {
    console.log("funcion externa")
    function interna() {
        console.log("funcion interna")
    }
    interna()
}

externa()
// interna() fuera del scope


// Funciones de orden superior (funciones que reciben otras funciones como argumento)
function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "funcion de orden superior")


// ForEach
let array = [1,2,3,4]

mySet = new Set(["fede", "andres", "barberis", 19, true, "fedebarberis@gmail.com"])

myMap = new Map([
    ["name", "fede"],
    ["apellido", "barberis"],
    ["edad", 19]
])

array.forEach(function (value) { 
    console.log(value)
})

array.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))



