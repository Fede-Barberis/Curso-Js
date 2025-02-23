// Bucles

// For

for(let i = 0; i < 5; i++) {
    console.log(`hola ${i}`)
}

const numbers = [1,2,3,4,5]

for (let i = 0; i < numbers.length; i++){
    console.log(`elemento: ${numbers[i]}`)
}


// While
let i = 0

while (i < 5){
    console.log(`hola ${i}`)
    i++
}


// Do While
i = 0 
do {
    console.log(`hola ${i}`)
    i++
} while(i < 5)


// For of (sirve para recorrer valores de algo que sea iterable (estructuras de datos [array,set,map,strings]))

let array = [1,2,3,4,5]
let set = new Set(["fede", "barberis", 19])
let map = new Map([
    ["name", "fede"],
    ["apellido", "barberis"],
    ["edad", 19]
])

for(let valor of array){
    console.log(valor)
}

for(let valor of set){
    console.log(valor)
}

for(let valor of map){
    console.log(valor)
}

let myString = "hola javaScript"

for(let valor of myString){
    console.log(valor)
}


// Buenas practicas

// break y continue

for(let i = 0; i < 10; i++) {
    if(i == 5){
        continue
    } else if(i == 7){
        break
    }
    console.log(`hola ${i}`)
}