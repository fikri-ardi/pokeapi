// onload
// Fetch All Pokemons
fetch('https://pokeapi.co/api/v2/pokemon')
    .then( response => {
        if (response.status != 200) {
            console.log(`Oops ${response.status}`)
            return
        }
        response.json().then( data => {
            const pokemons = data.results
            pokemons.forEach(pokemon => {
                document.getElementById('pokemonList').insertAdjacentHTML('beforeend',
                    `<li onclick="detail('${pokemon.url}')">${pokemon.name}</li>`
                )
            });
        } )
    }
)

// Show pokemon detail
function detail(url) {
    fetch(url).then(response => {
        response.json().then(pokemon => {
            document.getElementById('detail').innerHTML = '';
            document.getElementById('detail').insertAdjacentHTML('beforeend',
                `<img src="${pokemon.sprites.front_default}" class="pokemon">
                <h3>${pokemon.name}</h3>
                <p>${pokemon.height}cm</p>
                <p>${pokemon.weight}g</p>
                <p>${pokemon.moves[0].move.name}</p>
                `
            )
        })
    })
}