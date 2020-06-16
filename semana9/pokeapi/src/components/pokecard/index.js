import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function Pokecard({ pokemon }) {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    api
      .get(`${pokemon}`)
      .then((response) => {
        setPoke(response.data);
      })
      .catch((err) => {
        console.log('deu ruim tio!', err);
      });
  }, [pokemon]);

  return (
    <div>
      <p>{poke.name}</p>
      {poke.weight && <p>{poke.weight} kg</p>}
      {poke.types && <p>{poke.types[0].type.name}</p>}
      {poke.sprites && <img src={poke.sprites.front_default} alt={poke.name} />}
    </div>
  );
}

export default Pokecard;
