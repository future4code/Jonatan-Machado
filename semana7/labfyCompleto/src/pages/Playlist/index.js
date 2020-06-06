import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

function Playlist({
  match: {
    params: { id },
  },
}) {
  const [lists, setLists] = useState([]);
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
    </Container>
  );
}

export default Playlist;
