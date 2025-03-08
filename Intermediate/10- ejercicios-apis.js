// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error: ", error)
    })

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

fetch("https://jsonplaceholder.typicode.com/albumsss")
    .then(response => {
        if(!response.ok) {
            throw new Error(`Status HTTP: ${response.status}`) 
        }
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    })

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function getAlbums() {
    const url = "https://jsonplaceholder.typicode.com/albums"

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

getAlbums()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function postPost() {
    try{
        const post = {
            idUser: 1,
            title: "nueva publicacion",
            body: "cuerpo de mi publicacion"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })

        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

postPost()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function putPost() {
    try {
        const putPost = {
            idUser: 2, 
            title: "hola mundo", 
            body: "hola javaScript"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(putPost)
        })

        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log(error);
    }
}

putPost()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function patchPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: "modificacion de un atributo"})
        })

        const data = await response.json()
        console.log(data);

    }catch (error) {
        console.log(error);
    }
}

patchPost()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deletePost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE",
        })

        if(!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}, ${response.statusText}`)
        }
        console.log("Recurso eliminado con exito.");


    } catch(error) {
        console.log("Error al eliminar el recurso", error);
    }
}

deletePost()

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

async function getTiempo(city) {
    try{
        const apiKey = "fcd51685987001e2d9db578ccb6bc3fe" 
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},{3166}&appid=${apiKey}`

        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
    
    } catch(error) {
        console.log(error);
    }
}

getTiempo("Rafaela")

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

async function getPokemon(pokemon) {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Especie: ${data.species.name}`);

        // Obtener detalles especie
        const urlSpecies = data.species.url
        const responseSpecies = await fetch(urlSpecies)
        const dataSpecies = await responseSpecies.json()

        console.log(`\nDescripcion: \n${dataSpecies.flavor_text_entries[0].flavor_text}`);

        // Obtener cadena evolutiva
        const urlEvolution = dataSpecies.evolution_chain.url;
        const responseEvolution = await fetch(urlEvolution);
        const dataEvolution = await responseEvolution.json();

        console.log("\nCadena evolutiva:");
        let evolution = dataEvolution.chain;
        
        while (evolution) {
            console.log(`- ${evolution.species.name}`);
            evolution = evolution.evolves_to[0]; // Solo toma la primera evolución
        }

    } catch(error) {
        console.log(error);
    }
}

getPokemon("charizard")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API

