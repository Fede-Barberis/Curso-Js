// Programacion asincrona

//! Codigo sincrono

console.log("inicio");

for(let i=0; i < 1000000; i++){}

console.log("fin");

//?===================================================================================================================================================

//! Event loop (bucle de eventos)

//* Componenetes del Event Loop
// 1. Call Stack (pila de ejecucuion) 
// 2. Web APIs (APIs del navegador) o Node.js: setTimeOut()...
// 3. Task Queue (setTimeout()) y MicroTask Queue (Promesas)

//* Flujo del Event Loop: 
// 1. Call Stack
// 2. Operaciones asincronas -> Web APIs o Node.js
// 3. Operacion termina -> la colaca en las Task Queue o MicroTask Queue
// 4. Si Call Stack esta vacio -> mueve tareas del MicroTask Queue o Task Queue al Call Stack
// 5. El proceso se repite

//?===================================================================================================================================================

//! Codigo asincrono

//! - Callbacks

console.log("inicio");

setTimeout(() => {
    console.log("Esto se ejecuta despues de 2 segundos");
}, 2000)

console.log("fin");

//! - Problema: Callback Hell

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado");
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado");
        callback()
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado");
        callback()
    }, 1000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados");
        })
    })
})

//?===================================================================================================================================================

//! - Promesas

const promesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
        const ok = false
        if(ok) {
            resolve("Operacion exitosa")
        } else {
            reject("Se ha producido un error")
        }
    }, 4000)
})

// notificacion de que la promesa funcionose fue 
promesa
    .then(result => {                 // sale bien se ejecta esto
        console.log(result);
    })
    .catch(error => {                 // sale mal se ejecuta esto
        console.log(error);
    })

console.log("Fin del programa");

//?===================================================================================================================================================

//! - Encadenamiento de promesas

function step1Promise(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("paso 1 con promesa completado");
            resolve()
        }, 1000);
    })
}

function step2Promise(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("paso 2 con promesa completado");
            resolve()
        }, 1000);
    })
}

function step3Promise(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("paso 3 con promesa completado");
            resolve()
        }, 1000);
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log("Todos los pasos con promesa completados");
    })

//?===================================================================================================================================================

//! - Async/Await
// la palabra Async convierte una funcion en asincrona
// la palabra Await pausa la ejecucuion hasta que la promesa se resuelva

function espera(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function proceso() {
    console.log("Inicio del proceso");

    await espera(5000)
    console.log("Proceso dps de 5 segundos");

    await espera(1000)
    console.log("Proceso dps de 1 segundo");

    await espera(2000)
    console.log("Proceso dps de 2 segundo");

    console.log("Fin del proceso");
}

proceso()

//?===================================================================================================================================================