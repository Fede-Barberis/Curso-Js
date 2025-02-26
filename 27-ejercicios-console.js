// 1. Crea un función que utilice error correctamente
function dividir(a, b) {
    if (b === 0) {
        console.error("Error: No se puede dividir por cero.");
        return null; // Retornamos null para evitar una operación inválida
    }
    return a / b;
}

console.log(dividir(10, 2)); 
console.log(dividir(10, 0)); 

// 2. Crea una función que utilice warn correctamente
function verificarStock(stock) {
    if(stock < 5) {
        console.warn("Advertencia, quedan pocas unidades")
    } else {
        console.log("Stock suficiente.")
    }
}

verificarStock(3); 
verificarStock(10); 

// 3. Crea una función que utilice info correctamente
function mostrarInformacionUsuario(nombre, edad, ciudad) {
    console.info(`Información del usuario: Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);
}

mostrarInformacionUsuario("Juan", 25, "Buenos Aires");


// 4. Utiliza table
let person = [
    {name: "fede", age: 19},
    {name: "nico", age: 22}
]

console.table(person)

// 5. Utiliza group
console.group("Usuario:")
console.log("Nombre: Fede")
console.log("Edad: 19")
console.groupEnd()

// 6. Utiliza time
console.time('first')
for(let i=0; i< 1000000; i++){}
console.timeEnd('first')

// 7. Valida con assert si un número es positivo
let num = -2
console.assert(num >= 0,"Numero negativo")

// 8. Utiliza count
console.count("move")
console.count("move")
console.count("move")
console.countReset("move")
console.count("move")

// 9. Utiliza trace
console.trace("Seguimiento")

// 10. Utiliza clear
console.clear()