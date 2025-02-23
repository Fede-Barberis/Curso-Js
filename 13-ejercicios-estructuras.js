// 1. Crea un array que almacene cinco animales
let array = []

array.push("perro", "gato", "conejo", "loro", "gorrion")
console.log(array)

// 2. Añade dos más. Uno al principio y otro al final
array.push("iguana")
array.unshift("serpiente")
console.log(array)

// 3. Elimina el que se encuentra en tercera posición
array.splice(2,1)
console.log(array)

// 4. Crea un set que almacene cinco equipos
set = new Set(["boca juniors", "river plate", "independiente", "racing club", "estudiantes"])
console.log(set)

// 5. Añade dos más. Uno de ellos repetido
set.add("lanus", "independiente")
console.log(set)

// 6. Elimina uno concreto a tu elección
set.delete("river plate")
console.log(set)

// 7. Crea un mapa que asocie el número del mes a su nombre
let map = new Map([
    ["1", "enero"],
    ["2", "febrero"],
    ["3", "marzo"],
    ["4", "abril"],
    ["5", "mayo"],
    ["6", "junio"],
    ["7", "julio"],
    ["8", "agosto"],
    ["9", "septiembre"],
    ["10", "octubre"],
    ["11", "noviembre"],
    ["12", "diciembre"]
])
console.log(map)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(map.has("5"))
console.log(map.get("5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let array1 = ["diciembre", "enero", "febrero"]

map.set("meses verano", array1)
console.log(map)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array2 = ["manzana", "naranja"]
console.log(array2)

let set2 = new Set(array2)
console.log(set2)

map.set("frutas", set2)
console.log(map)

