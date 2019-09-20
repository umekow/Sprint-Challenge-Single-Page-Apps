import React, { useState } from "react";

export default function SearchForm(props) {
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.searchUrl(name)
   console.log(name)
   
}
return (
    <form onSubmit={event => handleSubmit(event)}>
        
        <label>
            Search Characters:  
            <input type="text"  name="name" onChange={e => handleChange(e)} />
        </label>
        
        <button>Search</button>
    </form>
  );
}
