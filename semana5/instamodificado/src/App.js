import React from 'react';
import Style from 'styled-components';
import './App.css';
import Post from './components/Post/Post';

const Formulario = Style.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-itens:center;
  width:20%;

`;

class App extends React.Component {
  state = {
    users: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://i.picsum.photos/id/182/50/50.jpg',
        fotoPost: 'https://i.picsum.photos/id/941/200/150.jpg',
      },
      {
        nomeUsuario: 'Soter',
        fotoUsuario: 'https://i.picsum.photos/id/808/50/50.jpg',
        fotoPost: 'https://i.picsum.photos/id/440/200/150.jpg',
      },
      {
        nomeUsuario: 'Caio',
        fotoUsuario: 'https://i.picsum.photos/id/765/50/50.jpg',
        fotoPost: 'https://i.picsum.photos/id/1045/200/150.jpg',
      },
    ],
    valorInputUsuario: '',
    valorInputPostUsuario: '',
    valorInputFotoUsuario: '',
  };

  adicionarPost = (e) => {
    e.preventDefault();
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputPostUsuario,
    };

    const novoPosts = [...this.state.users, novoPost];

    this.setState({ users: novoPosts });
  };

  onChangeInputFotoUsuario = (e) => {
    this.setState({ valorInputFotoUsuario: e.target.value });
  };

  onChangeInputPostUsuario = (e) => {
    this.setState({ valorInputPostUsuario: e.target.value });
  };

  onChangeInputUsuario = (e) => {
    this.setState({ valorInputUsuario: e.target.value });
  };

  render() {
    return (
      <>
        <Formulario>
          <input
            type="text"
            onChange={this.onChangeInputUsuario}
            value={this.state.valorInputUsuario}
            placeholder="Nome do usuario"
          />
          <input
            type="text"
            onChange={this.onChangeInputFotoUsuario}
            value={this.state.valorInputFotoUsuario}
            placeholder="Link da foto do Usuario"
          />
          <input
            type="text"
            onChange={this.onChangeInputPostUsuario}
            value={this.state.valorInputPostUsuario}
            placeholder="Link da foto do post"
          />
          <button onClick={this.adicionarPost}>Cadastrar</button>
        </Formulario>

        <div className={'app-container'}>
          {this.state.users.map((user) => (
            <Post
              key={user.nomeUsuario}
              nomeUsuario={user.nomeUsuario}
              fotoUsuario={user.fotoUsuario}
              fotoPost={user.fotoPost}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
