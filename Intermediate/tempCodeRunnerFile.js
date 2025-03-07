class Dni {
    constructor(dni) {
        if(dni.instance) {
            return dni.instance
        }
        this.dni = dni
        Dni.instance = this
    }
}

const persona = new Dni("46539511")
console.log(persona.dni);