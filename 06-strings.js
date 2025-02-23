// Cadenas de Texto

// Concatencacion 
let miNombre = "Fede"
let saludo = "hola, " + miNombre + ", como estas?"
console.log(saludo)

// Longitud
console.log(saludo.length)

// Acceso a caracteres
console.log(saludo[2])
console.log(saludo[20])
console.log(saludo[15])

// Metodos comunes
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

console.log(saludo.indexOf("Fede")) // devuelve la posicion de la primer letra de la palabra
console.log(saludo.indexOf("fede")) // devuelve -1 porque no encontro la palabra
console.log(saludo.indexOf("estas"))

// el includes tambien sirve para identificar elementos como letras, por ejemplo contar las vocales de una palabra
console.log(saludo.includes("estas")) // comprueba si existe t/f
console.log(saludo.includes("sarmiento")) 

console.log(saludo.slice(0, 10))
console.log(saludo.replace("Fede", "Señor"))


// Templete literals (plantillas literales)

let message = `hola, este es mi
curso de javaScript para
principiantes`

console.log(message)    

let email = "fedebarberis@gmail.com"

console.log(`hola, ${miNombre}!, tu email es ${email}`) 

