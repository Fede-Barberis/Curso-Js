// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function saludar (name, callback) {
    setTimeout(() => {
        callback(`Hola, ${name}`);
    }, 2000)
}

saludar("fede", (mensaje => console.log(mensaje)))

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1 (callback) {
    setTimeout(() => {
        console.log("Tarea 1 completada");
        callback()
    }, 1000)
}

function task2 (callback) {
    setTimeout(() => {
        console.log("Tarea 2 completada");
        callback()
    }, 1000)
}

function task3 (callback) {
    setTimeout(() => {
        console.log("Tarea 3 completada");
        callback()
    }, 1000)
}

task1 (() => {
    task2 (() => {
        task3 (() => {
            console.log("Todas las tareas fueron completadas");
        })
    })
})


// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function parOimpar (n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(n % 2 === 0) {
                resolve ("Numero par")
            } else {
                reject ("Numero impar")
            }
        })
    })
}

parOimpar(6)
    .then(result => console.log(result))
    .catch(error => console.log(error))

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Primera tarea completada");
            resolve()
        }, 1000)
    })
}

function secondTask () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Segunda tarea completada");
            resolve()
        }, 2000)
    })
}

function thirdTask () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tercera tarea completada");
            resolve()
        }, 1500)
    })
}

firstTask()
    .then(secondTask)
    .then(thirdTask)

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

function esperar (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
} 

async function ejecucionTareas () {
    try {
        await esperar(1000);
        console.log("Primera tarea completada");

        await esperar(2000);
        console.log("Segunda tarea completada");

        await esperar(1500);
        console.log("Tercera tarea completada");
    } catch (error) {
        console.error("Error al ejecutar las tareas:", error);
    }
}
ejecucionTareas();


// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

function getUser (id) {
    return new Promise((resolve, reject) => {
        if(id < 5) {
            resolve({id, nombre: "Usuario " + id})
        } else {
            reject("Usuario no encontrado")
        }
    }, 2000)
}

async function buscarUser (id) {
    try {
        const user = await getUser(id)
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

buscarUser(2)
buscarUser(8)

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:

console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

function tarea1 () {
    return new Promise((resolve) => {
        setTimeout(() => resolve("tarea 1 realizada"), 3000) 
    })
}

function tarea2 () {
    return new Promise((resolve) => {
        setTimeout(() => resolve("tarea 2 realizada"), 500)
    }) 
}

function tarea3 () {
    return new Promise((resolve) => {
        setTimeout(() => resolve("tarea 3 realizada"), 5000) 
    })  
}

Promise.all([tarea1(), tarea2(), tarea3()])
    .then((resultados) => {
        console.log(resultados);
        console.log("Todas las promesas completadas");
    })
    .catch ((error) => {
        console.log("Error: ", error);
    })

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos*1000))
}

async function proceso() {
    await waitSeconds(3)
    console.log("Tiempo finalizado");
}

proceso()

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

function checkBalance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let balance = 500
            resolve(balance);
        }, 1000)
    })
}

function withdrawMoney (ammount, balance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(balance >= ammount) {
                let nuevoBalance = balance -= ammount
                resolve({ Mensaje: `Operación exitosa`, saldoRestante: nuevoBalance});
            } else {
                reject("Fondos insuficientes")
            }
        }, 2000)
    })
}

async function cajeroAtomatico (retiros){
    try {
        let saldo = await checkBalance()
        console.log(`Saldo disponible: ${saldo}`);

        // const retiro = await withdrawMoney(300, saldo)
        // console.log(retiro);
        // saldo = retiro.saldoRestante

        // const retiro2 = await withdrawMoney(150, saldo);
        // console.log(retiro2);
        // saldo = retiro2.saldoRestante

        for (const retiro of retiros) {
            console.log(`Intentando retirar $${retiro}...`);
            const resultado = await withdrawMoney(retiro, saldo);
            console.log(resultado);
            saldo = resultado.saldoRestante; // Actualiza el saldo
        }

    } catch (error) {
        console.error("Error:", error);
    }

}

const retiros = [300, 300];
cajeroAtomatico(retiros)