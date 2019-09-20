import React, { useState } from "react";

export default function SearchForm() {
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <section className="search-form">
      <form onSumbit={e => handleSubmit(e)}>
        <label>
          Search:
          <input type="text" name="search" onChange={e => handleChange(e)} />
        </label>
        <button>Search</button>
      </form>
    </section>
  );
}
