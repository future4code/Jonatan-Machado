import React from 'react';

import { Container, Title, List, Playlist } from './styles';

function Browse() {
  return (
    <Container>
      <Title>Navegar</Title>

      <List>
        <Playlist to="/plalists/1">
          <img
            src="https://tonimarino.co.uk/wp-content/uploads/2019/11/Dark-Side-of-the-Moon-album-cover.jpeg"
            alt="playlist"
          />
          <strong>Rock Classic</strong>
          <p>Aproveite o rock classic</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://tonimarino.co.uk/wp-content/uploads/2019/11/Dark-Side-of-the-Moon-album-cover.jpeg"
            alt="playlist"
          />
          <strong>Rock Classic</strong>
          <p>Aproveite o rock classic</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://tonimarino.co.uk/wp-content/uploads/2019/11/Dark-Side-of-the-Moon-album-cover.jpeg"
            alt="playlist"
          />
          <strong>Rock Classic</strong>
          <p>Aproveite o rock classic</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://tonimarino.co.uk/wp-content/uploads/2019/11/Dark-Side-of-the-Moon-album-cover.jpeg"
            alt="playlist"
          />
          <strong>Rock Classic</strong>
          <p>Aproveite o rock classic</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://tonimarino.co.uk/wp-content/uploads/2019/11/Dark-Side-of-the-Moon-album-cover.jpeg"
            alt="playlist"
          />
          <strong>Rock Classic</strong>
          <p>Aproveite o rock classic</p>
        </Playlist>
      </List>
    </Container>
  );
}

export default Browse;
