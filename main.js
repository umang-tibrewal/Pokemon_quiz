


Array.prototype.reshufle=function(){
  
let carr=this
  let len=carr.length
  let random=Math.floor(Math.random()*len)
let s=carr[random]
  carr[random]=this[0]
  this[0]=s
  return carr

  
}
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
  
 

  let pokemon

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



// function checkAnswer() {
  
//   let submitHandler = (e) => {
//     e.preventDefault();
//     const answer = document.querySelector("#answer-input").value;
//     if (answer.toLowerCase() === pokemon) {
//       console.log("true answer");
//     } else {
//       console.log("false answer");
//     }
//   }
    
  

//   form=document.querySelector("form")
  

//   form.addEventListener("submit", submitHandler); // Add a new event listener


// }


function Options(){

  let options=document.querySelector(".options")
  let childrenoption=options.children
  let oparray=[];

  for(let i=0;i<3;i++){

    oparray.push(popularPokemon[i])
    
  }
  oparray.push(`${pokemon}`)
 
console.log(oparray)
  oparray=oparray.reshufle()
  console.log(oparray)
 
  for(let i=0;i<childrenoption.length;i++){

    console.log(childrenoption[i].innerHTML=`<button class="opt_btn">${oparray[i]}</button>`)
  }
 
}


function checkoption(){

  let mainul=document.querySelector(".options")
  mainul.addEventListener("click",(e)=>{

   if(pokemon==e.target.innerHTML){

    console.log("right answer")
    e.target.setAttribute("style","background-color:green")
   }
   else{
    e.target.setAttribute("style","background-color:#C45C4B")
   }
  })
}
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

  //  document.querySelector("#answer-input").value=""


  
  Options()

  



})

// checkAnswer()

checkoption()




