const btn=document.querySelector(".allPokemons__btn");
const display=document.querySelector(".display");
const spinner=document.querySelector("#spinner");
spinner.style.display="none";

const getAllPokemons= async()=>{
    spinner.style.display="block";
    document.querySelector('.pokebal-gif').style.display="none";
    
    let pokemonList=[];
    for (let i = 1; i < 151; i++) {
        const result=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemonesData= await result.json();
        pokemonList.push(pokemonesData);
        spinner.style.display="none";
    }
    const pokemons = pokemonList.map((element) => ({
        name: element.name,
        image: element.sprites.other["official-artwork"]["front_default"],
        id:`#${element.id.toString().padStart(3,0)}`
        }));
    
    
    
    const pokemonHTML=pokemons.map((character)=>
        `<div class="display__element">
            <h2 class="display__name">${character.name}</h2>
            <h2 class="display__id">${character.id}</h2>
            <img class="display__image" src="${character.image}" alt="${character.name}"/>
        </div>`
        ).join("");
    display.innerHTML=pokemonHTML

}

btn.addEventListener('click', getAllPokemons )

/* document.querySelector('.atras__btn').addEventListener('click',()=>{
    displayRandom.remove();
}) */

//!random pokemon
let randomBtn=document.querySelector(".randonPokemon__btn");
let displayRandom=document.querySelector(".random");

function rollDice(numero) {
    return Math.floor(Math.random() * (numero - 1)) + 1;
}

let randomPokemon= async()=>{
    spinner.style.display="block";
    document.querySelector('.pokebal-gif').style.display="none";

    let numeroRandom=rollDice(898);
    let result=await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}/`);
    let pokemonToJson= await result.json();
    spinner.style.display="none";

    let pokemonInfo= {
        name:pokemonToJson.name,
        image: pokemonToJson.sprites.other["official-artwork"]["front_default"],
        id:`#${pokemonToJson.id.toString().padStart(3,0)}`
    }

    
    console.log(pokemonInfo);
       const pokemonHTML = `
       <h1 class="displayRandom__name">${pokemonInfo.name}</h1>
       <h2 class="displayRandom__id">${pokemonInfo.id}</h2>
       <img class="displayRandom__image" src="${pokemonInfo.image}" alt="${pokemonInfo.name}"/>`;
    displayRandom.innerHTML=pokemonHTML;

    

}


randomBtn.addEventListener('click',randomPokemon);

//!buscar pokemon

let displayBuscar=document.querySelector(".buscar");

let buscarPokemon=async()=>{
    let id=document.querySelector(".buscar__input").value;
    let result=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    let pokemonToJson=await result.json();

    let pokemonInfo= {
        name:pokemonToJson.name,
        image: pokemonToJson.sprites.other["official-artwork"]["front_default"],
        id:`#${pokemonToJson.id.toString().padStart(3,0)}`
    }

    const pokemonHTML = `
       <h1 class="displayRandom__name">${pokemonInfo.name}</h1>
       <h2 class="displayRandom__id">${pokemonInfo.id}</h2>
       <img class="displayRandom__image" src="${pokemonInfo.image}" alt="${pokemonInfo.name}"/>`;
    displayBuscar.innerHTML=pokemonHTML;
}

document.querySelector(".buscar__btn").addEventListener('click',buscarPokemon)
