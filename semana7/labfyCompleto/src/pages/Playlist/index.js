import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

function Playlist() {
  return (
    <Container>
      <Header>
        <img
          src="https://tonimarino.co.uk/wp-content/uploads/2019/11/Dark-Side-of-the-Moon-album-cover.jpeg"
          alt="Pink Floyd"
        />
        <div>
          <span>PLAYLIST</span>
          <h1>Rock Classic</h1>
          <p>13 músicas</p>
          <button>Play</button>
        </div>
      </Header>

      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>
            <img src={ClockIcon} alt="Duração" />
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Dark Side Moon</td>
            <td>Pink Floyd</td>
            <td>The Dark Side Moonn</td>
            <td>8:30</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Dark Side Moon</td>
            <td>Pink Floyd</td>
            <td>The Dark Side Moonn</td>
            <td>8:30</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Dark Side Moon</td>
            <td>Pink Floyd</td>
            <td>The Dark Side Moonn</td>
            <td>8:30</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  );
}

export default Playlist;
