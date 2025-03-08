// API (interfaz de programacion de aplicaciones)
// Conjunto de reglas que permiten comunicarnos entre diferentes aplicaciones.

// Manejo de APIs

//! - APIs REST (HTTP + URLs + JSON)

//? Metodos HTTP:
//* - GET  -> obtener datos.
//* - POST -> enviar datos que generen un nuevo recurso.
//* - PUT  -> actualiza el recurso completo.
//* - DELETE -> solicita al servidor eliminar un recurso.


//? Codigos de respuesta HTTP:
//* - 200 OK -> indica exito.
//* - 201 -> es un OK pero encima devuelve que recurso a creado.
//* - 400 -> hay un error por parte del cliente.
//* - 404 -> recurso no encontrado
//* - 505 -> error del lado del servidor

//?==============================================================================================================================================

//! - Consumir una API con GET

// Este fectch se ejecuta de manera asincrona

// GET
fetch("https://jsonplaceholder.typicode.com/posts") 
    .then(response => {  
        // transforma la respuesta a JSON
        return response.json()
    })
    .then(data => {
        // procesa los datos
        console.log(data)
    })
    .catch(error => {      
        // captura errores
        console.log("Error: ", error);
    })


// Uso de Async/Await

async function getPosts() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts") // espero por la peticion
        const data = await response.json() // transformo los datos al formato json
        console.log(data) // muestro los datos
    } catch(error) {
        console.log("Error: ", error) // controlamos el error
    }
}

getPosts()

//?==============================================================================================================================================

//! - Solicitud POST

async function createPost() {
    try{

        const newPost = {
            idUser: 1,
            title: "este es el titulo de mi post",
            body: "este es el cuerpo de mi post"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // metodo a usar
            headers: {
                "Content-Type": "application/json" // formato del contenido
            },
            body: JSON.stringify(newPost) // transforma un objeto a un string que sigue el convenio de JSON.
        }) 

        const data = await response.json() 
        console.log(data) 
    } catch(error) {
        console.log("Error: ", error)
    }
}

createPost()

//?==============================================================================================================================================

//! Manejo de erorres

fetch("https://jsonplaceholder.typicode.com/fedeBarberis") 
    .then(response => {  
        if (!response.ok) {
            throw new Error (`Status HTTP: ${response.status}`)
        }
        return response.json()
    })
    .catch(error => {      
        console.log("Error: ", error);
    })

//?==============================================================================================================================================

//? Metodos HTTP adicionales:
//* - PATCH   -> actualizar parcialmente un recurso.
//* - OPTIONS -> permite consultar al serivdo que metodos HTTP estan disponibles para un recurso.


// PATCH
async function partialPostUpdate() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", { // El /10 significa el id del post a actualizar
            method: "PATCH", // metodo a usar
            headers: {
                "Content-Type": "application/json" // formato del contenido
            },
            body: JSON.stringify({ title: "este es el nuevo titulo de mi post" }) // transforma un objeto a un string que sigue el convenio de JSON.
        }) 


        const data = await response.json() 
        console.log(data) 
    } catch(error) {
        console.log("Error: ", error)
    }
}

partialPostUpdate()

//?==============================================================================================================================================

//! - Autenticacion mediante API key
// la API key es una clave personal.

async function getWeather(city) {
    const apiKey = "fcd51685987001e2d9db578ccb6bc3fe"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
        const reponse = await fetch(url)
        const data = await reponse.json()
        console.log(data);
        
    } catch (error) {
        console.log("Error: ", error);
    }
}
getWeather("Rafaela")

//?==============================================================================================================================================

//? - Otros metodos de Autenticacion y Autorizacion
//* - Bearer Tokens
//* - JWT

//?==============================================================================================================================================

//! Versionado de APIs
//* - https://api.example.com/v1/resources
//* - https://api.example.com/v2/resources

//?==============================================================================================================================================

//! Otras APIs

async function getPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Habilidades de: ${data.name}`)
        data.abilities.forEach(ability => {
            console.log(ability.ability.name)
        });
    } catch (error) {
        console.log("Error: ". error);
    }
}

getPokemon("pikachu")