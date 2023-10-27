//list of 24 random pokemon

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
  
 

//selecting my html 
let img=document.querySelector("#pokemon-image")
let genarate=document.querySelector("#generate-button")

//function to generate ramdon pokemon name to genrate image 

let pokemonName=function(){
  let randomvalue= Math.floor(Math.random()*23)

   let  pokemon= popularPokemon[randomvalue];

   return pokemon

}
//link with pokemon name to generate pokemon image 
let link =function(pokemon){

  const base="https://pokeapi.co/api/v2/pokemon/"
  return base+pokemon
}



function checkAnswer() {
  
  let submitHandler = (e) => {
    e.preventDefault();
    const answer = document.querySelector("#answer-input").value;
    if (answer.toLowerCase() === pokemon) {
      console.log("true answer");
    } else {
      console.log("false answer");
    }
  }
    
  

  form=document.querySelector("form")
  

  form.addEventListener("submit", submitHandler); // Add a new event listener
  answer=""

}



let pokemon
// genrate button ->call link by fetch
genarate.addEventListener("click",(e)=>{
  
 pokemon=pokemonName()
console.log(`${pokemon}`)

let api=link(pokemon)
    
    
    fetch(api)
  .then((data)=>{
         return data.json()
  
  }).then((gd)=>{
  
      url=gd.sprites.other.dream_world.front_default
      img.setAttribute("src",url)
   
   
  }).catch((error)=>{
  
      console.log(`error: ${error}`);
  })

  

  console.log(pokemon)

  // document.querySelector("#answer-input").value="write answer"
  
  



})

checkAnswer()




