// Operadores

// Operadores Aritmeticos
let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division

console.log(a % b) // Modulo = resto de la division
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a) 

b-- // Decremento
console.log(b) 


// Operadores de Asgnacion
let myVariable = 2
console.log(myVariable)

myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2


// Operadores de Comapracion
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a >= b)

console.log(a == b) // igualdad por valor
console.log(a == 6) // igualdad por valor
console.log(a == "6") // igualdad por valor

console.log(a === b) // igualdad por identidad (valor y tipo)
console.log(a === 6) // igualdad por identidad (valor y tipo)
console.log(a === "6") // igualdad por identidad (valor y tipo)

console.log(a!= 6)

// Valores verdaderos 

// Todos los numeros postivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

// Valores falsos

// 0
// 0n
// null
// undefined
// Nan
// el boolean false
// cadenas de texto vacias


// Operadores Logicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 < 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 < 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)


// not (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))


// Operadores Ternarios 
const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")