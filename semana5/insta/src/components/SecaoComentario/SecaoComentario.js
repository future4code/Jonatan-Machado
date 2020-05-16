import React, { Component } from 'react';
import './SecaoComentario.css';

export class SecaoComentario extends Component {
  state = {
    comentario: '',
  };

  onChangeComentario = (e) => {
    console.log(e.target.value);
    this.setstate = { comentario: e.target.value };
  };

  render() {
    return (
      <>
        <h1>{this.state.comentario}</h1>
        <div className={'comment-container'}>
          <input
            className={'input-comentario'}
            placeholder={'Comentário'}
            onChange={this.onChangeComentario}
          />
          <button onClick={this.props.aoEnviar}>Enviar</button>
        </div>
      </>
    );
  }
}
