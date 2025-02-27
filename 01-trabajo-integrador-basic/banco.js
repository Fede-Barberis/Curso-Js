import Persona from "./persona.js"

export class Banco {

    constructor() {
        this.cuentas = new Map()
    }

    agregarCuenta(persona, saldo = 0) {
        try {
            if(this.cuentas.has(persona.nroCuenta)) {
                throw new Error(`La cuenta ${persona.nroCuenta} ya existe.`)
            } else if (saldo <= 0){
                throw new Error("No se puede tener saldo negativo.")
            } else {
                this.cuentas.set(persona.nroCuenta, saldo) 
                console.log(`- Usuario: ${persona.nombre} - Cuenta: ${persona.nroCuenta} - Saldo: ${saldo} agregada correctamente.`)
            }
        } catch (error) {
            console.log("Error al registrar: ",error.message)
        }
    }

    depositar(nroCuenta, ingreso) {
        try {
            if(!this.cuentas.has(nroCuenta)){
                throw new Error(`La cuenta ${nroCuenta} no existe.`)
            } else {
                if(typeof ingreso !== "number"){
                    throw new TypeError("Tipo de dato incorrecto.")
                }
                
                if(ingreso <= 0) {
                    throw new Error("Debe ingresar un valor mayor a cero.")
                }

                this.cuentas.set(nroCuenta, this.cuentas.get(nroCuenta) + ingreso)
                console.log(`Deposito de $${ingreso} realizado en cuenta: ${nroCuenta}`) 
                
            }
        } catch (error) {
            if(error instanceof TypeError){
                console.log("Error: ",error.message)
            } else if (error instanceof Error) {
                console.log("Error al depositar: ",error.message)
            }
        }
    }

    retirar(nroCuenta, retiro){
        try{
            if(!this.cuentas.has(nroCuenta)) {
                console.log(`\nLa cuenta ${nroCuenta} no existe.`)
            } else {
                if(typeof retiro !== "number") {
                    throw new Error("Tipo de dato incorrecto.")
                }
                if(this.cuentas.get(nroCuenta) < retiro) {
                    throw new Error("Dinero insuficiente en la cuenta.")
                }

                this.cuentas.set(nroCuenta, this.cuentas.get(nroCuenta) - retiro)
                console.log(`Retiro de $${retiro} realizado en cuenta: ${nroCuenta}`)
            }
            
        } catch(error) {
            if(error instanceof TypeError){
                console.log("Error: ",error.message)
            } else if (error instanceof Error) {
                console.log("Error al retirar: ",error.message)
            }
        }
    }

    transferir (emisor, receptor, monto) {
        try {
            if(!this.cuentas.has(emisor) && !this.cuentas.has(receptor)) {
                throw new Error(`Las cuentas ${emisor} y ${receptor} no existen.`)
            } else {
                if (typeof monto !== "number") {
                    throw new Error("Tipo de dato incorrecto.")
                } else if (monto <= 0) {
                    throw new Error("El monto a transferir debe ser mayor a cero.")
                } else if (this.cuentas.get(emisor) < monto) {
                    throw new Error(`Dinero insuficiente en la cuenta ${emisor} para realizar la transferencia.`)
                } else {
                    this.cuentas.set(emisor, this.cuentas.get(emisor) - monto)
                    this.cuentas.set(receptor, this.cuentas.get(receptor) + monto)
                    console.log(`La transferencia por $${monto} a la cuenta ${receptor} fue exitosa.`)
                }
            }
        } catch (error) {
            console.log("Error: ",error.message)
        }
    }

    verSaldo(nroCuenta) {
        try {
            if(this.cuentas.has(nroCuenta)) {
                return `Saldo de la cuenta ${nroCuenta}: $${this.cuentas.get(nroCuenta)}`
            } else {
                throw new Error(`La cuenta ${nroCuenta} no existe.`)
            }
        } catch (error) {
            console.log("Error: ",error.message)
        }
    }
}


const banco = new Banco()
const persona1 = new Persona("Fede", "32154")
const persona2 = new Persona("Nico", "12248")
const persona3 = new Persona("Vicky", "87345")
// const persona4 = new Persona("Vicky", "87345")

banco.agregarCuenta(persona1, 250000)
banco.agregarCuenta(persona2, 150000)
banco.agregarCuenta(persona3, 200000)
// banco.agregarCuenta(persona4, 350000)

console.log("")

// banco.depositar("32154", 50000)
console.log(banco.verSaldo("32154"))
console.log(banco.verSaldo("87345"))

console.log("")

// banco.depositar("87345", -23300)
// console.log(banco.verSaldo("87345"))

// banco.retirar("12248", 1232)
// console.log(banco.verSaldo("12248"))

banco.transferir("32154", "87345", 260000)
console.log(banco.verSaldo("32154"))
console.log(banco.verSaldo("87345"))



console.error("Este es un mensaje de error");


