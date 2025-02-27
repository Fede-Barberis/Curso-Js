// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Fede"
console.log(myName)

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "fede1"
let password = "1234"

if(usuario == "fede1" && password == "1234"){
    console.log("datos correctos")
}else{
    console.log("datos incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let a = -4
if(a > 0){
    console.log("el numero es positivo")
} else if(a < 0){
    console.log("el numero es negativo")
} else{
    console.log("el numero es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 12
let dif = (18 - edad)

if(edad >= 18){
    console.log("puede votar")
} else{
    console.log(`no puede votar, le faltan ${dif} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad 
let age = 12
let cond = ""

let message = age >= 18 ? cond = "Adulto" : cond = "Menor"
console.log(cond)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 4
let nombreMes = ""
dias = undefined

switch(mes){
    case 1: 
        nombreMes = "Enero"
        dias = 31
        break
    case 2:
        nombreMes = "Febrero"
        dias = 28
        break
    case 3:
        nombreMes = "Marzo"
        dias = 31
        break
    case 4:
        nombreMes = "Abril"
        dias = 30
        break
    case 5:
        nombreMes = "Mayo"
        dias = 31
        break
    case 6:
        nombreMes = "Junio"
        dias = 30
        break
    case 7:
        nombreMes = "Julio"
        dias = 31
        break
    case 8:
        nombreMes = "Agosto"
        dias = 31
        break
    case 9:
        nombreMes = "Septiembre"
        dias = 30
        break
    case 10:
        nombreMes = "Octubre"
        dias = 31
        break
    case 11:
        nombreMes = "Noviembre"
        dias = 30
        break
    case 12:
        nombreMes = "Diciembre"
        dias = 31
        break
    default:
        console.log("Mes incorrecto")
}

console.log(nombreMes + " tiene " + dias + " dias")

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 1
let saludo = ""

switch(idioma){
    case 0:
        saludo = ("hola mundo")
        break
    case 1:
        saludo = ("hello world")
        break
    case 2:
        saludo = ("Olá mundo")
        break
    default:
        console.log("idioma incorrecto")
}

console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7