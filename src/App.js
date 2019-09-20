import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route, NavLink } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
export default function App() {
  return (
    <main>
      <Header />
      <button>
        <NavLink to="/">Welcome</NavLink>
      </button>
      <button>
        <NavLink to="/characters">Characters</NavLink>
      </button>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
    </main>
  );
}
