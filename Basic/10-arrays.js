// (Estructura de datos)


// Declaracion Array

let array1 = [] // utilizar este
let array2 = new Array()

// Inicializacion

array1 = [3] // almacena el numero 3
array2 = new Array(3) // alamcena 3 huecos vacios esperando a ser rellenados

console.log(array1)
console.log(array2)

array1 = [1,2,3,4]
array2 = new Array(1,2,3,4)

console.log(array1)
console.log(array2)

array1 = ["Fede", "Barberis", 31, true]
array2 = new Array("Fede", "Barberis", 37, true)

console.log(array1)
console.log(array2)


array2 = new Array(3)
array2[0] = "Fede"
//array2[1] = "Andres"
array2[2] = "Barberis"
array2[3] = "Barberisss"

console.log(array2)

array1 = []
array1[0] = "Fede"
//array1[1] = "Andres"
array1[2] = "Barberis"

console.log(array1)



// Metodos comunes
array = []

// push(agrega) y pop(elimina)

// push es la operacion que sirve para introducir elementos en el array
array.push("fede")
array.push("andres")
array.push("barberis")
array.push("37")

console.log(array)

// pop es la operacion que elimina el ultimo elemento del array
array.pop()
console.log(array)

console.log(array.pop()) //  elimina el ultimo elemento y lo devuelve
console.log(array)


// shift y unshift

// Shift elimina el primer elemento del array
console.log(array.shift()) 
console.log(array)

// Unshift sirve para agregar 1 o mas elementos al principio del array
array.unshift("nico", "barberis", 22) 
console.log(array)


// lenght (porpiedad que permite saber el largo del array)
console.log(array.length) 


// clear
array = [] // forma de eliminar un array
array.length = 0 // alternativa
console.log(array)


// slice (se utiliza para quedarnos con pedazos del array)
array.push("fede", "andres", "barberis", 19, true)

let newArray = array.slice(0, 2) // tenemos en cuenta el primer indice pero no el ultimo

console.log(array)
console.log(newArray)

console.log("---------------------------------------")

// splice (elimina los elemento del array comenzando desde el primer indice hasta la cantidad definida)
array.splice(1, 3)
console.log(array)

array = []
array.push("fede", "andres", "barberis", 19, true)
console.log(array)

array.splice(1, 3, "Nueva entrada") // esta forma elimina los elementos marcados por los indices y agrega en su lugar el nuevo valor
console.log(array)

