import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterDetails = props => 
{

  
  const current = props.item.find(
    item => props.match.params.id === `${item.id}`     
)
return (<CharacterCard 
  id={item.id}
  name={item.name}
  image={item.image}
  status={item.status}
  gender={item.gender}
  species={item.species}
  location={item.location}
/>)
}

export default CharacterDetails;
