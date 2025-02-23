// Map / diccionario

// Declaracion
let myMap = new Map()
console.log(myMap)

// Inicializacion
myMap = new Map([
    ["name", "fede"],
    ["apellido", "barberis"],
    ["edad", 19]
])

console.log(myMap)


// Metdoos comunes

// Set (se utiliza para agregar o actulizar elementos)
myMap.set("alias", "toro")
myMap.set("name", "andres")

// Get (se utiliza para recuperar un valor)
console.log(myMap.get("name"))
console.log(myMap.get("profesion"))


// Has (se utiliza para saber si existe un elemento dentro del map) 
console.log(myMap.has("name"))
console.log(myMap.has("profesion"))


// Keys, Values y Entries
console.log(myMap.keys()) // (retorna un listado unicamente con las claves)
console.log(myMap.values()) // (retorna un listado unicamente con los valores de las claves)
console.log(myMap.entries()) // (retorna un listado con las claves y sus valores)


// Size (tamaño del mapa)
console.log(myMap.size)


// Delete (eliminar elementos a trvaes de su clave de busqueda)
myMap.delete("name")
console.log(myMap)


// Clear (eliminar todo el map)
myMap.clear()
console.log(myMap)


