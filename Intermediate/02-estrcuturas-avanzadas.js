// Estructuras avanzadas

// Arrays avanzados

//! - Metodos funcionales

//* forEach
// me permite ejecutar un codigo para cada elemento
let numbers = [1,2,3,4,5,6]

numbers.forEach(element => console.log(element))

//* map 
// retorna un nuevo array
// me permite realizar una operacion a cada elemento del array

let duplicado = numbers.map(element => element * 2)
console.log(duplicado);

//* filter
// permite filtrar elementos
// retorna un nuevo array

let pares = numbers.filter(element => element % 2 === 0)
console.log(pares);

//* reduce
// devuelve un unico numero

let sum = numbers.reduce((result, current) => result + current, 0)
// let sum = numbers.reduce((result, current) => result + current, 5) puedo ponerle un valor inicial
console.log(sum);

//! - Manipulacion

//* flat
// aplana un array que tiene una profundidad especifica
// retorna otro array

let arrayAnidado = [1, [2, [3, [4]]]]
flatArray = arrayAnidado.flat(1) // Segun la profundidia que le demos va a desanidar el array
flatArray = arrayAnidado.flat(2)
flatArray = arrayAnidado.flat(3)
flatArray = arrayAnidado.flat(4)
console.log(flatArray);

//* flatMap
// combina flat y map
// retorna un nuevo array

let frases = ["hola mundo.", "adios. mundo"]
let palabras = frases.flatMap(frase => frase.split(" ")) // split es una funcion de las cadenas de texto que permite realizar recortes segun un criterio
console.log(palabras);


//! - Ordenacion

//* Sort
// por defecto sort ordena por orden alfabetico
// devuelve un nuevo array

let desordenado = ["b", "a","d","c"]
let ordenado = desordenado.sort()
console.log(ordenado);

desordenado = [3, 5, 1, 10, 6]
ordenado = desordenado.sort((a, b) => a - b)
console.log(ordenado);

//* reverse
// da la vuelta a los elementos del array
// modifica el array actual

ordenado.reverse()
console.log(ordenado);


//! - Busquedas

//* includes
// se encarga de verificar si ese elmento existe en el array

console.log(ordenado.includes(5)) // existe (true)
console.log(ordenado.includes(4)) // no existe (false)

//* find
// permite buscar el primer elemento que cumpla una condicion
// si no encuentra ningun elemento que cumpla la condicion devuelve undefined

let primerPar = ordenado.find(element => element % 2 === 0)
console.log(primerPar);

//* findIndex
// retorna un numero
// si no encuentra nada devuelve un -1

let primerIndicePar = ordenado.findIndex(element => element % 2 === 0)
console.log(primerIndicePar);

//?===================================================================================================================================================

// Sets avanzados

//! - Operaciones

//* eliminacion de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray);

//* union

const setA = new Set ([1, 2, 3])
const setB = new Set ([2, 3, 4, 5])
const union = new Set ([...setA, ...setB])
console.log(union);

//* interseccion
const interseccion = new Set ([...setA].filter(element => setB.has(element)))
console.log(interseccion);

//* diferencia

const diferencia = new Set([...setA].filter(element => !setB.has(element)))
console.log(diferencia);


//! - Conversion

//* set a array
console.log([...setA]); 


//! - Iteracion

//* forEach

setA.forEach(element => console.log(element))

//?===================================================================================================================================================

// Maps avanzados

//! - Iteracion

//*  forEach

let map = new Map([
    ["name", "fede"],
    ["age", 19],
])

map.forEach((value, key) => console.log(`${key}: ${value}`))


//! - Conversion

//* map a array

const arrayFromMap = Array.from(map)
console.log(arrayFromMap);

//* map a objeto

const objetoFromMap = Object.fromEntries(map)
console.log(objetoFromMap); 

//* objeto a map
const mapFromObject = new Map(Object.entries(objetoFromMap))
console.log(mapFromObject)

//?===================================================================================================================================================