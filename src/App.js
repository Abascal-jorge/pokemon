import React from 'react';
import Header from "./components/Header";
import Form from "./components/Formulario/Form";
import PokemonState from "./context/pokemonState";



function App() {
  return (
      <PokemonState>
        <Header/>
        <Form/>
      </PokemonState>
  );
}


export default App;
