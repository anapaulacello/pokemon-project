const btn=document.querySelector(".allPokemons__btn");
const display=document.querySelector(".display");
const spinner=document.querySelector("#spinner");
spinner.style.display="none";
let lastPokemon=10;
//!todos los pokemos
const getAllPokemons= async()=>{
    spinner.style.display="block";
    document.querySelector('.pokebal-gif').style.display="none";
    
    let pokemonList=[];
    for (let i = 1; i <=lastPokemon; i++) {
        const result=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemonesData= await result.json();
        pokemonList.push(pokemonesData);
        
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
    spinner.style.display="none";
}



btn.addEventListener('click', getAllPokemons )

//!funcion para hacer scroll ( ͡๑ ﹏ ͡๑)
window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
    if (scrollTop + clientHeight + 0.5 >= scrollHeight) {
      lastPokemon += 10;
      getAllPokemons();
    }
  });

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
    if (id>898) {
        window.alert("solo hay 898 pokemons");
        spinner.style.display="none";
    }
    if (id==0) {
        window.alert("no existe el pokemon con id=0");
        spinner.style.display="none";
    }

    let result=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    let pokemonToJson=await result.json();
    spinner.style.display="none";

    let pokemonInfo= {
        name:pokemonToJson.name,
        image: pokemonToJson.sprites.other["official-artwork"]["front_default"],
        id:`#${pokemonToJson.id.toString().padStart(3,0)}`
    }

    const pokemonHTML = `
       <h1 class="displayBuscar__name">${pokemonInfo.name}</h1>
       <h2 class="displayBuscar__id">${pokemonInfo.id}</h2>
       <img class="displayBuscar__image" src="${pokemonInfo.image}" alt="${pokemonInfo.name}"/>`;
    displayBuscar.innerHTML=pokemonHTML;
    document.querySelector('.pokebal-gif').style.display="none";
}

document.querySelector(".buscar__btn").addEventListener('click',buscarPokemon)
