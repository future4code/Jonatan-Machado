import React, { useState } from 'react';
import './App.css';
import { Post } from './components/Post';

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista
    const newPost = {
      id: Date.now(),
      text: inputValue,
      liked: false,
    };

    const newPostsList = [newPost, ...postsList];
    if (inputValue === '') {
      setError(true);
    } else {
      setPostsList(newPostsList);
      setInputValue('');
      setError(false);
    }
  };

  const deletePost = (postId) => {
    // Apaga um post da lista
    const newPostsList = postsList.filter((post) => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = (postId) => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map((post) => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked,
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className='App'>
      <div>
        <input
          type='text'
          onChange={onChangeInput}
          value={inputValue}
          placeholder={'Novo post'}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {error === false ? <hr /> : <h2>Insira uma task</h2>}
      {postsList.length === 0 ? (
        <h1>Nenhuma task</h1>
      ) : (
        postsList.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              toggleLike={toggleLike}
              deletePost={deletePost}
            />
          );
        })
      )}
      <p>quantidade de tasks: {postsList.length}</p>
    </div>
  );
};

export default App;
