// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array = [1,2,3,4]

let [valor1, valor2] = array
console.log(valor1)
console.log(valor2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [valor3, valor4, valor5, valor6, valor7= 0] = array
console.log(valor3)
console.log(valor4)
console.log(valor5)
console.log(valor6)
console.log(valor7)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    name: "fede",
    age: 19
}

let {name, age} = person
console.log(name)
console.log(age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name: name2, age: age2} = person
console.log(name2)
console.log(age2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let person2 = {
    name: "fede",
    age: 19,
    universidad: {
        nombre: "utn",
        carrera: "programacion"
    }
}

let {universidad: {nombre, carrera}} = person2
console.log(nombre)
console.log(carrera)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10]

let array3 = [...array1, ...array2]
console.log(array3)

// 7. Usa propagación para crear una copia de un array
let array4 = [...array1]
console.log(array4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let person3 = {
    email: "fede@gmail.com",
    estado: "soltero"
}

person4 = {...person, ...person3}
console.log(person4)

// 9. Usa propagación para crear una copia de un objeto
let person5 = {...person4}
console.log(person4)

// 10. Combina desestructuración y propagación
let array6 = [1,2,3,4,5]
let array7 = [6,7,8,9,10]

let array8 = [...array6, ...array7]
console.log(array8)

let [n1, n2, , , ,n6, n7, ,n9] = array8
console.log(n1)
console.log(n2)
console.log(n6)
console.log(n7)
console.log(n9)