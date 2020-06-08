import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

function Sidebar() {
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
  }, [lists]);

  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <Link to="/">Navegar</Link>
          </li>
          <li>
            <Link to="/">Rádio</Link>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>SUA BIBLIOTECA</span>
          </li>
          <li>
            <a href="teste">Seu Daily Mix</a>
          </li>
          <li>
            <a href="teste">Tocado recentemente</a>
          </li>
          <li>
            <a href="teste">Músicas</a>
          </li>
          <li>
            <a href="teste">Albums</a>
          </li>
          <li>
            <a href="teste">Artistas</a>
          </li>
          <li>
            <a href="teste">Estações</a>
          </li>
          <li>
            <a href="teste">Arquivos Locais</a>
          </li>
          <li>
            <a href="teste">Vídeos</a>
          </li>
          <li>
            <a href="teste">Podcast</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>Playlists</span>
          </li>
          {lists.map((list) => (
            <li key={list.id}>
              <a href={`/playlists/${list.id}/tracks`}>{list.name}</a>
            </li>
          ))}
        </Nav>
      </div>
      <NewPlaylist>
        <img src={AddPlayListIcon} alt="Adicionar Playlist" />
        <Link to="/playlists">Nova Playlist</Link>
      </NewPlaylist>
    </Container>
  );
}

export default Sidebar;
