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
