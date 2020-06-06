import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Title, List, Playlist } from './styles';

function Browse() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    api
      .get('/playlists', {
        headers: {
          Authorization: 'jonatan-machado-mello',
        },
      })
      .then((response) => {
        setLists(response.data.result.list);
      });
  }, []);

  function handleNameArtist(name) {
    localStorage.setItem('name', JSON.stringify(name));
  }

  return (
    <Container>
      <Title>Navegar</Title>
      <List>
        {lists.map((list) => (
          <Playlist
            to={`/playlists/${list.id}/tracks`}
            key={list.id}
            onClick={handleNameArtist(list.name)}
          >
            <img
              src="https://tonimarino.co.uk/wp-content/uploads/2019/11/Dark-Side-of-the-Moon-album-cover.jpeg"
              alt="playlist"
            />
            <strong>${list.name}</strong>
            <p>${list.name}</p>
          </Playlist>
        ))}
      </List>
    </Container>
  );
}

export default Browse;
