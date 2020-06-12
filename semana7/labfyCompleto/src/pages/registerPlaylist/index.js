import React, { useState } from 'react';
import api from '../../services/api';

import { Container, Header, FormRegister } from './styles';
import PlayList from '../../assets/images/playlist.jpg';
function RegiterPlaylist() {
  const [playlists, setPlaylists] = useState();

  async function handlePlaylist(e) {
    e.preventDefault();
    const data = { name: playlists };

    try {
      const response = await api.post('/playlists', data, {
        headers: { Authorization: 'jonatan-machado-mello' },
      });
      const playlist = response.data;
    } catch (err) {
      console.log(`erro ${err}`);
    }
  }

  return (
    <Container>
      <Header>
        <img src={PlayList} alt="Labfy" />
        <div>
          <h1>Criar playlist</h1>
        </div>
      </Header>

      <FormRegister>
        <form onSubmit={handlePlaylist}>
          <input
            type="text"
            placeholder="Nome da playlist"
            onChange={(e) => setPlaylists(e.target.value)}
          />
          <button type="submit">CRIAR</button>
        </form>
      </FormRegister>
    </Container>
  );
}

export default RegiterPlaylist;
