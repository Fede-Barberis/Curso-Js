function calculadora (a= 0,b= 0,c= "+"){
    let resultado = 0

    switch(c){
        case "+":
            resultado = a + b
            break
        case "-":
            resultado = a - b
            break
        case "*":
            resultado = a * b
            break
        case "/":
            resultado = a / b
            break
        default:
            console.log("expresion incorrecta")
    }
    return resultado

}

console.log(calculadora(4,9))


// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a,b){
    console.log(a+b)
}
suma(5,5)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function numMayor(a){
    let mayor = 0

    for(let i=0; i< a.length; i++){
        if(mayor < a[i]){
            mayor = a[i]
        }
    }
    console.log(mayor)
}

let array = [1,5,4,58,3,21,15,23]
numMayor(array)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function cantVocales(a){
    let cantvocales = 0
    let vocales = ["a","e","i","o","u"]

    for(let letra of a){
        if(vocales.includes(letra)){
            cantvocales ++
        }
    }
    console.log(cantvocales)
}

cantVocales("hola mundoo")

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function textoMayuscula(a){
    let nuevoArray = []

    for(let i=0; i< a.length; i++){
        nuevoArray[i] = a[i].toUpperCase()
    }
    console.log(nuevoArray)
}

let array1 = ["fede", "nico","vito"]
textoMayuscula(array1)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function isPrimo(a){
    if(a < 2){ return false } 
    
    for(let i=2; i <= Math.sqrt(a); i++){
        if(a % i == 0) return false
    }
    return true
}

console.log(isPrimo(2))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function interseccionArray(a,b) {
    let nuevoArray = []

    for(let i= 0; i < a.length; i++){
        if(b.includes(a[i])){
            nuevoArray.push(a[i])
        }
    }
    return nuevoArray
}

let array2 = [1,7,44,32,98,7,21]
let array3 = [1,41,30,98,6,21]

console.log(interseccionArray(array2, array3))

// Otra forma de realizarlo mas sencilla
function interseccionArray(a, b) {
    return a.filter(elemento => b.includes(elemento));
}

let array4 = [1,7,44,32,98,7,21]
let array5 = [1,41,30,98,6,21]

console.log(interseccionArray(array4, array5))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(a){
    let suma = 0

    for(let i= 0; i < a.length; i++){
        if(a[i] % 2 == 0){
        suma += a[i]
        }
    }
    return suma
}

let array6 = [4,8,1,3,9,12,15,21]
console.log(sumaPares(array6))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function arrayAlCuadrado(a){
    let nuevoArray = []

    for(let i=0; i < a.length; i++){
        nuevoArray.push(a[i] ** 2)
    }
    return nuevoArray
}

let array7 = [10,5,4,6,9]
console.log(arrayAlCuadrado(array7))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function cadenaInversa(a) {
    return a.split(" ").reverse().join(" ")
}

console.log(cadenaInversa("hola java script"))

//split(" ") → Corta el string en cada espacio y lo convierte en un array de palabras -> ["Hola", "mundo", "esto", "es", "JavaScript"]]
//reverse() → Invierte el orden de las palabras en el array. -> ["JavaScript", "es", "esto", "mundo", "Hola"]
//join(" ") → Vuelve a unir el array en un string, separando con espacios. -> "JavaScript es esto mundo Hola"

// 10. Crea una función que calcule el factorial de un número dado
function factorial(a) {
    factorial = 1

    for(let i= a; i > 0; i--) {
        factorial *= i
    }
    return factorial
}

console.log(factorial(8))