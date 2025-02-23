// 1. Concatena dos cadenas de texto
let cad1 = "hola"
let cad2 = "fede"
console.log(cad1 + " " + cad2)

// 2. Muestra la longitud de una cadena de texto
cad3 = "bienvenido a javascript"
console.log(cad3.length)

// 3. Muestra el primer y último carácter de un string
console.log(cad3[0] + " " + cad3[22])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cad3.toUpperCase())
console.log(cad3.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let cad4 = `hola
javascript
es un orgullo
aprender`

console.log(cad4)

// 6. Interpola el valor de una variable en un string
console.log(`${cad1}, ${cad2}, todo bien?`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cad5 = "hola bienvenido a javaScript"
let nuevaCad = ""

for(let i=0; i < cad5.length; i++){
    nuevaCad += cad5[i].replace(" ", "-")
}

console.log(nuevaCad)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
cad5
console.log(cad5.includes("jabaScript"))
console.log(cad5.includes("javaScript"))

// 9. Comprueba si dos strings son iguales
cad6 = "boca juniors"
cad7 = "Boca juniorss"

let result = (cad6 == cad7) ? true : false
console.log(result)

// 10. Comprueba si dos strings tienen la misma longitud
result = (cad6.length == cad7.length) ? true : false
console.log(result)
