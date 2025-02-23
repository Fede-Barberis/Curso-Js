// Condicionalers (if, else, else if)

// if (si)

let age = 19

if(age == 19){
    console.log(`la edad es ${age}`)
}

// else (si no)

if(age > 18){
    console.log("Es mayor de edad")
}else{
    console.log("Es menor de edad")
}

// else if (si no, si)
age = 12

if(age == 19){
    console.log(`la edad es ${age}`)
} else if(age > 18){
    console.log("Es mayor de edad")
} else{
    console.log("Es menor de edad")    
}


// Operador Ternario
age > 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad")

const message = age > 18 ? "Es mayor de edad" : "Es menor de edad"
console.log(message)


// Switch
let day = 5
let dayname = ""

switch(day){
    case 0:
        dayname = ("Lunes")
        break
    case 1:
        dayname = ("Martes")
        break
    case 2:
        dayname = ("Miercoles")
        break
    case 3:
        dayname = ("Jueves")
        break
    case 4:
        dayname = ("Viernes")
        break
    case 5:
        dayname = ("Sabado")
        break
    case 6:
        dayname = ("Domingo")
        break 
    default:
        console.log("Error, numero de dia incorrecto")
        break
}

console.log(dayname)