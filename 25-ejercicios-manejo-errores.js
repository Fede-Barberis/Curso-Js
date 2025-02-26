// 1. Captura una excepción utilizando try-catch
let persona

try {
    console.log(persona.nombre)
} catch {
    console.log("Error")
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(persona.nombre)
} catch {
    console.log("Error")
} finally {
    console.log("Este bloque se ejecuta siempre")
}

// 3. Lanza una excepción genérica
try {
    console.log(persona.nombre)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}

// 4. Crea una excepción personalizada
class ErrorPersonalizado extends Error{
    constructor(message){
        super(message)
    }
}

// 5. Lanza una excepción personalizada
function sumarEnteros(a, b) {
    if (typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Se ha producido un error de tipo.")
    }
    if (a == 0 || b == 0) {
        throw new ErrorPersonalizado("Se esta intentando sumar cero.")
    }
    return a + b
}

try {
    console.log(sumarEnteros(5,0))
} catch (error) {
    console.log("Error personalizado: ", error.message)   
}

// 6. Lanza varias excepciones según una lógica definida
// 7. Captura varias excepciones en un mismo try-catch
try {
    console.log(sumarEnteros(5,5))
} catch (error) {
    if(error instanceof TypeError ) {
        console.log("Error personalizado: ", error.message)
    } else if (error instanceof ErrorPersonalizado) {
        console.log("Error personalizado: ", error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let array = ["5","10","33","1", "hola", 0]

array.forEach (valor =>  { 
    try {
        const numeroFloat = parseFloat(valor)
        if(isNaN(numeroFloat)) {
            throw new Error(`No se pudo convertir ${valor} a float`)
        }
        console.log(`El valor ${numeroFloat} fue convertido ${ typeof numeroFloat} `)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }

})

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropiedadInexistente extends Error {
    constructor(message) {
        super(message)
    }
}

let person = {
    name: "fede",
    age: 19
}

function verificarPropiedad(objeto, propiedad) {
    if(!objeto.hasOwnProperty(propiedad)) {
        throw new PropiedadInexistente(`La propiedad ${propiedad} no existe`)
    }
    return propiedad 
}

try {
    verificarPropiedad(person, "age")
    console.log("La propiedad existe")
} catch (error) {
    console.log("Error: ",error.message)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function adivinar(a) {
    let vida = 10
    
    while(vida != 0) {
        const numeroAleatorio = numeroRandom()
        if (typeof a !== "number"){
            throw new TypeError("Error, el valor ingresado no es un numero.")
        }

        if(!Number.isInteger(a)) {
            throw new Error("Error, el valor ingresado no es un entero")
        }

        if (a <= 0 || a >= 10) {
            throw new Error("EL numero seleccionado es invalido. (1-10)")
        }

        if(a === numeroAleatorio){
            console.log(`Correcto, era el numero: ${numeroAleatorio}`)
            break
        } else {
            console.log(`Incorrecto, era el numero:  ${numeroAleatorio}`)
            vida -= 1
            console.log(`Te quedan ${vida} intento\n`)
        }
    }

    if(vida == 0) {
        throw new Error("Se agotaron los intentos.")
    }
    
}

function numeroRandom(adivinar) {
    let opciones = [1,2,3,4,5,6,7,8,9,10]

    let indiceAleatorio = Math.floor(Math.random() * opciones.length)
    return opciones[indiceAleatorio]

}

try {
    let resultado = adivinar(2)
} catch(error) {
    console.log("Error: ", error.message)
} 
