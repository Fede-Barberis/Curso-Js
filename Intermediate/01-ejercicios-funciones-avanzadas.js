// 1. Crea una función que retorne a otra función
function crearSaludo(saludo) {
    return function (name) {
        return `${saludo}, ${name}`
    }
}

const saludoCasual =  crearSaludo("buenos dias ")
console.log(saludoCasual("Fede"));

// 2. Implementa una función currificada que multiplique 3 números
function multiplicacion(a) {
    return function(b) {
        return function(c) {
            return a * b * c
        }
    }
}
const multiAB = multiplicacion(5)(5)
console.log(multiAB(3));

console.log(multiplicacion(5)(3)(1))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(a, b) {
    if(b === 0){
        return 1
    }

    return a * potencia(a, b-1)
}

console.log(potencia(5,3));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter (a) {
    let counter = a
    
    return {
        increment() {
            counter ++
        },

        decrement() {
            counter --
        },

        getValue() {
            console.log(`Contador: ${counter}`);
        }
    }
}

const contador = createCounter(2)
contador.getValue()
contador.increment()
contador.increment()
contador.getValue()
contador.decrement()
contador.getValue()


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes (multiplier, ...numbers) {
    let sum = 0
    for(let num of numbers) {
        sum += num
    }
    return sum * multiplier
}

console.log(sumManyTimes(5, 1,4,5));

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function procesar (mensaje, callback) {
    console.log("Mensaje recibido: ", mensaje);
    callback()
}

function mostrarConfirmacion () {
    console.log("El mensaje fue procesado correctamente");
}

procesar("hola, mundo", mostrarConfirmacion)

// 7. Desarrolla una función parcial
function sum(...numbers) {
    let sum = 0
    for (let num of numbers) {
        sum += num
    }
    return sum
}

function sumPartial (a) {
    return function (b, c) {
        return function (d) {
            return sum(a,b,c,d)            
        }
    }
}

const sumWith = sumPartial(5)
console.log(sumWith(5, 5)(10))


// 8. Implementa un ejemplo que haga uso de Spread
const numbers = [1,2,3,4,5,6,7,8,9]

function sumSpread(a, b, c, d) {
    return a + b + c + d 
}

console.log(sumSpread(...numbers));


// 9. Implementa un retorno implícito
const mult = (a,b) => a * b
console.log(mult(5,5)); 


// 10. Haz uso del this léxico 

const persona = {
    name: "fede",

    saludar() {
        console.log(`hola, ${this.name}`);
    }
}

persona.saludar();