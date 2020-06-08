import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Header, SongList, FormRegister } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

function Playlist({
  match: {
    params: { id },
  },
}) {
  const [lists, setLists] = useState([]);
  const [song, setSong] = useState({
    name: '',
    artist: '',
    url: '',
  });
  const name = localStorage.getItem('name');
  useEffect(() => {
    api
      .get(`/playlists/${id}/tracks`, {
        headers: {
          Authorization: 'jonatan-machado-mello',
        },
      })
      .then((response) => {
        setLists(response.data.result.tracks);
      });
  }, []);

  async function handleSong(e) {
    e.preventDefault();
    const data = { name: song.name, artist: song.artist, url: song.url };

    try {
      const response = await api.post(`/playlists/${id}/tracks`, data, {
        headers: { Authorization: 'jonatan-machado-mello' },
      });
      const songs = response.data;
    } catch (err) {
      console.log(`erro ${err}`);
    }
  }

  function loadSong(url) {
    localStorage.setItem('music', JSON.stringify(url));
  }
  return (
    <Container>
      <Header>
        <img
          src="https://tonimarino.co.uk/wp-content/uploads/2019/11/Dark-Side-of-the-Moon-album-cover.jpeg"
          alt="Labfy"
        />
        <div>
          <span>PLAYLIST</span>
          <h1>{name.replace(/"/g, '')}</h1>
          <p>
            {lists.length > 1
              ? `${lists.length} musicas`
              : `${lists.length} musica`}
          </p>
          <button>Play</button>
        </div>
      </Header>

      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>
            <img src={ClockIcon} alt="Duração" />
          </th>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list.id} onDoubleClick={() => loadSong(list.url)}>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>{list.name}</td>
              <td>{list.artist}</td>
              <td>8:30</td>
            </tr>
          ))}
        </tbody>
      </SongList>
      <FormRegister>
        <form onSubmit={handleSong}>
          <input
            type="text"
            placeholder="Nome do Artista"
            onChange={(e) => setSong(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nome da Músca"
            onChange={(e) => setSong(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL (código do spotify)"
            onChange={(e) => setSong(e.target.value)}
          />
          <button type="submit">CRIAR</button>
        </form>
      </FormRegister>
    </Container>
  );
}

export default Playlist;
