// 1. Crea una variable para cada operación aritmética
let suma = 10 + 5;       
let resta = 20 - 8;      
let multiplicacion = 4 * 3;  
let division = 16 / 2;
let modulo = 10 % 3;     
let exponente = 2 ** 3;  

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let numero = 10;  // Variable base

numero += 5;  // Asignación con suma (equivale a numero = numero + 5)
numero -= 3;  // Asignación con resta (equivale a numero = numero - 3)
numero *= 2;  // Asignación con multiplicación (equivale a numero = numero * 2)
numero /= 4;  // Asignación con división (equivale a numero = numero / 4)
numero %= 3;  // Asignación con módulo (equivale a numero = numero % 3)
numero **= 2; // Asignación con exponente (equivale a numero = numero ** 2)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 < 20)
console.log(30 >= 20)
console.log(10 == 10)
console.log(10 === 10)
console.log(10 == "10")

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(10 > 20)
console.log(10 >= 20)
console.log(10 == 20)
console.log(10 === 20)
console.log(10 === "20")

// 5. Utiliza el operador lógico and
let a = 5
let b = 6
console.log(a > 10 && b < 10)

// 6. Utiliza el operador lógico or
console.log(a > 10 || b < 10)

// 7. Combina ambos operadores lógicos
console.log(a > 10 && b < 10 || 10 > 5)

// 8. Añade alguna negación
console.log(!(a > 10 && b < 10 || 10 > 5))

// 9. Utiliza el operador ternario
let isbocaGana = true
isbocaGana ? console.log("la mitad mas 1 estara feliz") : console.log("la mitad mas 1 estara enojada")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((a + b) > 10 && 10 == 10 )