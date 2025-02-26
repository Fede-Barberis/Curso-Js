// Manejo de errores

// Excepcion 

// Produce una excepcion
// let objeto 
// console.log(objeto.email) 


// Try-catch

try {
    // codigo que intenta ejecutar
    console.log(objeto.email)
    console.log("Finaliza la ejecucion sin errores")
} catch {
    // bloque de error
    console.log("Se ha producido un error")
}


// Captura del error

try {
    console.log(objeto.email)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}


// Finally (ejecuta el codigo si o si, no importa si surge un error)

try {
    console.log(objeto.email)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("este codigo se ejecuta siempre")
}

// No esta soportado
/* try {
    console.log(objeto.email)
} finally {
    console.log("este codigo se ejecuta siempre")
} */


// Lanzamineto de errores

// Throw

// throw new Error("Se ha producido un error")

function sumIntegers(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError ("Esta operacion solo suma numeros")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) { // manera de comprobar si son numero enteros
        throw new Error ("Esta operacion solo suma numeros enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se esta intentando sumar cero", a, b)
    }
    return a + b
}

/* try {
    console.log(sumIntegers(5,10))
    console.log(sumIntegers(5,10.90))
    console.log(sumIntegers("5",10))
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} */


// Capturar varios tipos de errores 

try {
    //console.log(sumIntegers(5,10.90))
    console.log(sumIntegers("5",10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo: ", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error: ", error.message)
    }
    
}


// Crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}


try {
    console.log(sumIntegers(5,0))
} catch (error) {
    console.log("Se ha producido un error personalizado: ", error.message)
    error.printNumbers()
}