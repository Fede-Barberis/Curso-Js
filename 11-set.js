// set

// Declaracion

let mySet = new Set()
console.log(mySet)

// Inicializacion 
mySet = new Set(["fede", "andres", "barberis", 19, true, "fedebarberis@gmail.com"])
console.log(mySet)


// Metodos comunes

// add y delete

// Add (añade elementos al final del set)
mySet.add("https://moureDev") 
console.log(mySet)

// Delete (elimina el elemento indicado a traves de su valor)
mySet.delete("https://moureDev") 
console.log(mySet)

console.log(mySet.delete("andres")) // aparte de borrar el elemento retorna un true si el elemento del set existe y fue eliminado
console.log(mySet)


// Has (sirve para verificar si existe un elemento)
console.log(mySet.has("fede"))


// Size (sirve para saber el tamaño del set)
console.log(mySet.size)


// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)  

// Convertir un array a set
mySet = new Set(myArray)
console.log(mySet)


// Set no permite elementos duplicados dentro de las listas, el array si.
mySet.add("barberis")
console.log(mySet)