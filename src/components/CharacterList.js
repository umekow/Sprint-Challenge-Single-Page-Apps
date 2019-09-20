import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Route } from "react-router-dom";
import CharacterDetails from "./CharacterDetails";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      const data = response.data.results;
      setData(data);
      console.log(data);
    });
  }, []);

  const searchUrl = name => {
    const result = data.filter(character => character.name === name);

    console.log(result);
  };

  return (
    <section className="character-list">
      <h2>Characters</h2>
      <SearchForm searchUrl={searchUrl} />
      <div>
        {data.map(item => (
          <CharacterCard
            id={item.id}
            name={item.name}
            image={item.image}
            status={item.status}
            gender={item.gender}
            species={item.species}
            location={item.location}
          />
        ))}
      </div>
    </section>
  );
}
