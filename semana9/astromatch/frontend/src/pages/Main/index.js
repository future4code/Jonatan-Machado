import React, { useEffect, useState } from 'react';

import './styles.css';

import api from '../../services/api';

import Header from '../../components/Header';
import Clear from '../../components/Clear';

import dislike from '../../assets/dislike.svg';
import like from '../../assets/like.svg';
import itsmatch from '../../assets/itsamatch.png';

function Main() {
  const [users, setUsers] = useState([]);
  const [matchUser, setMatchUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const response = await api.get('jonatan/person');
    setUsers(response.data.profile);
  }

  async function handleLike(id, name, photo, bio) {
    const body = {
      id: id,
      choice: true,
    };

    let userMatch = {};

    userMatch.userPhoto = photo;
    userMatch.userName = name;
    userMatch.userBio = bio;

    const response = await api.post(`jonatan/choose-person`, body);
    const result = response.data.isMatch;
    console.log(result);
    if (result === true) {
      setMatchUser(userMatch);
    } else {
      setMatchUser(null);
    }
    loadUsers();
  }

  async function handleDislike(id) {
    const body = {
      id: id,
      choice: false,
    };
    await api.post(`/jonatan/choose-person`, body);
    loadUsers();
  }

  return (
    <>
      <div className="main-container">
        <Header />

        <Clear />
        <ul>
          <li key={users.id}>
            <img src={users.photo} alt={users.name} />
            <footer>
              <strong>{users.name}</strong>
              <p>{users.bio}</p>
            </footer>

            <div className="buttons">
              <button type="button" onClick={() => handleDislike(users.id)}>
                <img src={dislike} alt="Dislike" />
              </button>
              <button
                type="button"
                onClick={() =>
                  handleLike(users.id, users.name, users.photo, users.bio)
                }
              >
                <img src={like} alt="Like" />
              </button>
            </div>
          </li>
        </ul>

        {matchUser && (
          <div className="match-container">
            <img src={itsmatch} alt="It's a match" />
            {console.log(matchUser)}
            <img className="avatar" src={matchUser.userPhoto} alt="" />
            <strong>{matchUser.userName}</strong>
            <p>{matchUser.userBio}</p>

            <button type="button" onClick={() => setMatchUser(null)}>
              FECHAR
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
