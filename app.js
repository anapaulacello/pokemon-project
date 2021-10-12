const btn=document.querySelector(".allPokemons__btn");
const display=document.querySelector(".display");

const getAllPokemons= async()=>{
    let pokemonList=[];
    for (let i = 1; i < 151; i++) {
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

    document.querySelector('.pokebal-gif').style.display="none";
    
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
    let numeroRandom=rollDice(151);
    let result=await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}/`);
    let pokemonToJson= await result.json();

    let pokemonInfo= {
        name:pokemonToJson.name,
        image: pokemonToJson.sprites.other["official-artwork"]["front_default"],
        id:`#${pokemonToJson.id.toString().padStart(3,0)}`
    }

    let displayRandom=document.querySelector(".random");
    
    console.log(pokemonInfo);
       const pokemonHTML = `
       <h1 class="displayRandom__name">${pokemonInfo.name}</h1>
       <h2 class="displayRandom__id">${pokemonInfo.id}</h2>
       <img class"displayRandom__img" src="${pokemonInfo.image}"/>`;
    displayRandom.innerHTML=pokemonHTML;

    document.querySelector('.pokebal-gif').style.display="none";

}


randomBtn.addEventListener('click',randomPokemon);
// <img src="${pokemonInfo.image}"/>

/* const getAllData=async()=>{
    const result=await fetch(`https://api.agify.io?name=michael`);
    const reultJson=await result.json();

    const dataHTML=`<p>${reultJson.name}</p>
                    <p>${reultJson.age}</p>
                    <p>${reultJson.count}</p> `;
    newDiv.innerHTML=dataHTML;
};
getAllData(); */


