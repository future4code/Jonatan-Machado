import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://i.picsum.photos/id/182/50/50.jpg'}
          fotoPost={'https://i.picsum.photos/id/941/200/150.jpg'}
        />
        <Post
          nomeUsuario={'Soter'}
          fotoUsuario={'https://i.picsum.photos/id/808/50/50.jpg'}
          fotoPost={'https://i.picsum.photos/id/440/200/150.jpg'}
        />
        <Post
          nomeUsuario={'Caio'}
          fotoUsuario={'https://i.picsum.photos/id/765/50/50.jpg'}
          fotoPost={'https://i.picsum.photos/id/1045/200/150.jpg'}
        />
      </div>
    );
  }
}

export default App;
