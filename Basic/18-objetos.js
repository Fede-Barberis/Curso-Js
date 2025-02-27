// Objetos
// todo lo que no es un dato primitivo es un objeto

// Sintaxis
let person = {
    name: "fede",
    age: 19,
    apellido: "barberis"
}

// Acceso a propiedades

// Notacion punto, mas recomendable
console.log(person.name)

// Notacion de corchetes
console.log(person["name"])


// Modificacion de propiedades
person.name = "Andres"
console.log(person.name)

console.log(typeof(person.age))
person.age = "19"
console.log(person.age)
console.log(typeof person.age)

person.name = "fede"

// Eliminacion de propiedades
delete person.age   
console.log(person)

// Nueva propiedad
person.email = "fedebarberis@gmail.com"
person["age"] = 19

console.log(person)

// --------------------------------------------------------------------------------------------

// Metodos (Funciones)

let person2 = {
    name: "fede",
    age: 19,
    apellido: "barberis",
    camina: function(){
        console.log("la perosna camina")
    }
}
console.log(person2)
person2.camina()

// Anidacion de objetos

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

console.log(person3)
console.log(person3.name)
console.log(person3.trabajo)
console.log(person3.trabajo.name)
person3.trabajo.trabaja()


// Igualdad de objetos
let person4 = {
    name: "fede",
    apellido: "barberis",
    email: 'fedebarberis@gmail.com',
    age: 19
}

console.log(person)
console.log(person4)

console.log(person == person4) // comparacion por valor
console.log(person === person4) // comparacion por identidad

console.log(person.name == person4.name) // no se pueden comparar objetos entre si, pero si sus porpiedades


// Iteracion de objetos
for(let key in person2){
    console.log(key + ": " + person4[key])
}

// Funciones con objetos


// Forma de realizar un constructor, pero a dia de hoy no es una buena practica. Deberia ser una clase
function Person(name, age) {
    this.name = name
    this.age = age
}

let person5 = new Person("Nico", 22)
console.log(person5)

console.log(typeof person5)