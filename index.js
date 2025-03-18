// fetch = Function used for making HTTP requests to fetch resources.
// (JSON style data, images, files)

// Simplifies asynchronous data fetching in JavaSciprt and
// used for interacting with APIs to retrieve and send data 
// asynchronously over the web.

// fetch(url, {options}) options: default is GET
// fetch is promised based, resolve or reject

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json()
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error));
    
// Using async await
    
// fetchData();

async function fetchData(){
    
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const resultName = document.getElementById("resultName");
        const imgElement = document.getElementById("pokemonSprite");
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default;
        resultName.textContent = `Your selected pokemon is: ${data.name.toUpperCase()}`;
        
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}