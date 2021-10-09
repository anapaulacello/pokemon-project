const display=document.querySelector(".display");
const spinner=document.querySelector("#spinner");
const getPokemon= async()=>{
    const result=await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`);
    
    const characterData= await result.json();
    
    console.log(characterData);
    //aqui termina el fetch
    //mapeo de los parametros q necesito de los personajes
    const characters = characterData.results.map((element,image) => ({
        name: element.name,
        image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${image+1}.png`
      }
      ));
    
    displayCharacter(characters);
}


const displayCharacter=(characters)=>{
    const characterHTML=characters.map((character)=>
        `<div class="display__element">
            <h2 class="display__name">${character.name}</h2>
            <img class="display__image" src="${character.image}" alt="${character.name}"/>
        </div>`
    ).join("");
    display.innerHTML=characterHTML
    
};


getPokemon();

