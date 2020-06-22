import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';
import PokeCard from './components/pokecard';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    api
      .get('?limit=151')
      .then((response) => {
        const data = response.data.results;
        setPokemon(data);
      })
      .catch((err) => {
        console.log('deu ruim tio!', err);
      });
  }, []);

  const changePokeName = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <div>
      <select onChange={changePokeName}>
        <option value={''}>Nenhum</option>
        {pokemon.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <PokeCard pokemon={pokemonName} />
    </div>
  );
}

export default App;
