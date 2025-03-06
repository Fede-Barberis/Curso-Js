// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const array = [1,2,3,4,5,6]

const arrayPotenciado = array.map(element => element ** 2)
console.log(arrayPotenciado);

const arrayFiltrado = array.filter(element => element % 2 != 0)
console.log(arrayFiltrado);

let multiplicacion = array.reduce((result, actual) => result *= actual)
console.log(multiplicacion);

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const arrayAlCubo = array.map(element => element ** 3)
arrayAlCubo.filter(element => element % 2 === 0) 
console.log(arrayAlCubo);

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

const arrayAnidado = [1, 2, [3, [4, [5]]]]
let flatArray = arrayAnidado.flat(3)
console.log(flatArray);

const frases = ["buenos dias", "buenas tarde", "hola fede"]
const palabras = frases.flatMap(frase => frase.split(" "))
console.log(palabras)

const numeros = [1,2,3,4,5]

const duplicados = numeros.flatMap(num => num * 2)
console.log(duplicados);

// 4. Ordena un array de números de mayor a menor
const desordenado = [1,5,3,9,10,6,4,2,7]
const ordenado = desordenado.sort((a, b) => a - b)
ordenado.reverse()
console.log(ordenado)


// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const setA = new Set ([1,2,3,4])
const setB = new Set ([3,4,5,6,7])

const union = new Set ([...setA, ...setB])
console.log(union);

const interseccion = new Set ([...setA].filter(element => setB.has(element)))
console.log(interseccion)

const diferencia = new Set ([...setA].filter(element => !setB.has(element)))
console.log(diferencia)

// 6. Itera los resultados del ejercicio anterior
union.forEach(element => console.log(element))
interseccion.forEach(element => console.log(element))
diferencia.forEach(element => console.log(element))

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
const map = new Map ([
    ["name", "fede"],
    ["age", 19],
    ["email", "fede@gmail.com"],
    ["name2", "nico"],
    ["age2", 22],
    ["email2", "nico@gmail.com"],
])

map.forEach((value, key) => console.log(`${key}: ${value}`))

// 8. Dado el mapa anterior, crea un array con los nombres
const arrayFromMap = Array.from(map)
console.log(arrayFromMap)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set


// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario