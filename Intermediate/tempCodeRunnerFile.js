let arrayAnidado = [1, [2, [3, [4]]]]
flatArray = arrayAnidado.flat(1) // Segun la profundidia que le demos va a desanidar el array
flatArray = arrayAnidado.flat(2)
flatArray = arrayAnidado.flat(3)
flatArray = arrayAnidado.flat(4)
console.log(flatArray);
