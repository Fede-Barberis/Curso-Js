// 1. Crea un objeto con 3 propiedades
let persona = {
    name: "fede",
    surname: "barberis",
    age: 19
}

// 2. Accede y muestra su valor
console.log(persona.surname)
console.log(persona.name)
console.log(persona.age)

// 3. Agrega una nueva propiedad
persona.email = "fede@gmail.com"

// 4. Elimina una de las 3 primeras propiedades
delete persona.age

// 5. Agrega una función e invócala
persona.comer = function() {
    console.log("la persona esta comiendo")
}

persona.comer()

// 6. Itera las propiedades del objeto
for(let key in persona) {
    console.log(key + ": " + persona[key])
}

// 7. Crea un objeto anidado
let persona2 = {
    name: "juan",
    age: 20,
    trabajo: {
        name: "cormoran",
        exp:1,
        cargo: "balin"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona2.trabajo.name)
console.log(persona2.trabajo.exp)
console.log(persona2.trabajo.cargo)


// 9. Comprueba si los dos objetos creados son iguales
console.log(persona == persona2)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(persona.name == persona2.age)