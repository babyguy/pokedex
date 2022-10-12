// poke_api
const url_pokeAPi = "https://pokeapi.co/api/v2/pokemon/";
const container   = document.getElementById('pokemon-container')

// funtion async
async function buscarPokemon(pokemon){
    // url
  const respuesta = await fetch(url_pokeAPi+pokemon);
  if(respuesta.status === 404){
    // si no se encuentra de le inorma al usuario
    container.innerHTML=`<H2 class="stat">El pokemon  ${pokemon} no se encontro en la base de datos </H2>`
  }else if(respuesta.status === 200){
    // si se encuentrea se trae la informacion y se muestra al usuario
  const datos = await respuesta.json();
  container.innerHTML=`
    <div class="pokemon">
        <div>
            <img class="img-pokemon" src="${datos.sprites.front_default}" height="300px">
        </div>
        <div>
            <p><span class="stat" id="stat0">${datos.stats[0].stat.name} : ${datos.stats[0].base_stat}</span></p>
            <p><span class="stat" id="stat1">${datos.stats[1].stat.name} : ${datos.stats[1].base_stat}</span></p>
            <p><span class="stat" id="stat2">${datos.stats[2].stat.name} : ${datos.stats[2].base_stat}</span></p>
            <p><span class="stat" id="stat3">${datos.stats[3].stat.name} : ${datos.stats[3].base_stat}</span></p>
            <p><span class="stat" id="stat4">${datos.stats[4].stat.name} : ${datos.stats[4].base_stat}</span></p>
            <p><span class="stat" id="stat5">${datos.stats[5].stat.name} : ${datos.stats[5].base_stat}</span></p>
        </div>
    </div> `;

  }
}

document.getElementById('buscar').addEventListener('click',()=>{

    // se trae la informacion del formulario
    const pokemonInt  = document.getElementById('pokemon').value
    // se ejecuta la funcion buscarPokemon
    buscarPokemon(pokemonInt);
})

// limpiar el formulario
document.getElementById('borrar').addEventListener('click',()=>{
    document.getElementById('pokemon').value = ''
})