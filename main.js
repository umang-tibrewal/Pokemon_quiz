const popularPokemon = [
    "pikachu",
    "charizard",
    "bulbasaur",
    "squirtle",
    "jigglypuff",
    "eevee",
    "mewtwo",
    "mew",
    "gengar",
    "snorlax",
    "gyarados",
    "dragonite",
    "machamp",
    "greninja",
    "lucario",
    "gardevior",
    "mimikyu",
    "raichu",
    "lugia",
    "rayquaza",
    "salamence",
    "blaziken",
    "venusaur",
    "alakazam"
  ]
  let url
 


let img=document.querySelector("#pokemon-image")

let genarate=document.querySelector("#generate-button")


genarate.addEventListener("click",(e)=>{
    let randomvalue= Math.floor(Math.random()*23)

   let  pokemonName= popularPokemon[randomvalue];

    const base= "https://pokeapi.co/api/v2/pokemon/"
    const api=base+pokemonName
    fetch(api)
  .then((data)=>{
         return data.json()
  
  }).then((gd)=>{
  
      url=gd.sprites.other.dream_world.front_default
      img.setAttribute("src",url)
      
   
  }).catch((error)=>{
  
      console.log("error");
  })

  
  


})


