import { useState } from "react";

function Pokemon() {
    // const [pokeList, setPokeList] = useState([]);
  async function getAllPoke(){
    const apiUrl = "https://pokeapi.co/api/v2/pokemon"
    const restData = await fetch(apiUrl);
    const jsonData =  await restData.json();
// 
    console.log(jsonData);
    setPokeList(jsonData);
  }
  
  getAllPoke();
  console.log(pokeList);
  
    return (
    <div>Pokemon aja</div>
  )
}

export default Pokemon