// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 1; i<=20; i++){
    console.log(i)
}

let cont = 1

while(cont != 21){
    console.log(cont)
    cont++
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma= 0

for (let i=1; i <= 100; i++){
    suma = suma+i
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++ ){
    if(i%2 == 0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let array = ["fede","nico","vito","juan"]

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "el nico es un puto"
let cantVocales = 0
let vocales = ["a","e","i","o","u"]

for(let letra of cadena){
    if(vocales.includes(letra)){
        cantVocales ++
    }
}
console.log("La cantidad de vocales son: " + cantVocales)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [2,3,4,5,6]
let producto = 1

for (let num of numeros){
    producto *= num
}
console.log(producto)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let num = 5

for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena1 = "hola fede"
let cadenaInvertida = ""

for(let i = cadena1.length -1; i >= 0; i--){
    cadenaInvertida += cadena1[i]
}
console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let numero = 0

for(let i = 0; i < 10; i++){
    numero =  
    console.log(numero)
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let array1 = [1,5,4,99,43,12,7,65,81,9]
let newArray = []

for(let i=0; i< array1.length; i++){
    if(array1[i] > 10){
        newArray[i] = array1[i] 
        console.log(newArray[i])
    } 
}
