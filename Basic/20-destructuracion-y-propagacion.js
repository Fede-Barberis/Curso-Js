// Destructuracion

// Nos permite extrae valores de arrays u objetos y asignarselos a las variables.

array = [1,2,3, 4]

let person = {
    name: "fede",
    age: 19,
    apellido: "barberis"
}

let myValue = array[1]
console.log(myValue)

let myName = person.name
console.log(myName)


// Destructuracion 

// Sintaxis arrays
let [myValue0, myValue1, myValue2, myValue3, myValue4] = array
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis de array con valores predeterminados
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = array
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos array
let [myValue10, , , myValue13] = array
console.log(myValue10)
console.log(myValue13)

// ==============================================================================================================================================

// Syntaxis objetos

let {name, age, apellido} = person
console.log(name)
console.log(age)
console.log(apellido)

// Sintaxis de objetos con valores predeterminados

let {name2, age2, apellido2, email="fedebarberis@gmial.com"} = person
console.log(name2) // No existe
console.log(age2) // No existe
console.log(apellido2) // No existe
console.log(email) 

// Sintaxis objetos con nuevos nombres de variables
let {name: name3, age: age3, apellido: apellido3} = person
console.log(name3)
console.log(age3)
console.log(apellido3)


let person3 = {
    name: "fede",
    age: 19,
    apellido: "barberis",
    camina: function(){
        console.log("la perosna camina")
    },
    trabajo: {
        name: "programador",
        exp: 2,
        trabaja: function(){
            console.log(`la persona de ${this.exp} años de experiencia trabaja`) // this hace referencia a ese objeto
        }
    }
}

// Desestructurar valores de objetos anidados
let {trabajo: {name: jobName}} = person3
console.log(jobName)

// ==============================================================================================================================================

// Propagacion (...)

// la propagacion permite expandir elementos de un array u objeto a otros arrays u objetos.


// Syntaxis arrays

let array2 = [...array, 5, 6]

console.log(array2)

// Copia de arrays 
let array3 = [...array]
console.log(array3)

// Combinacion de arrays 
let array4 = [...array, ...array2, ...array3]
console.log(array4)

// Sintaxis objetos
let person4 = {...person, email: "fede@gmail.com"}
console.log(person4)

// Copia de objetos
let person5 = {...person}
console.log(person5)