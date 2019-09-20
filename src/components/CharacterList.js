import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
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

  return (
    <section className="character-list">
      <h2>Characters</h2>
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
