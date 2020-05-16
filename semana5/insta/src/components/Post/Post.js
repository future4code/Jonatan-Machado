import React from 'react';
import './Post.css';

import { IconeComContador } from '../IconeComContador/IconeComContador';

import iconeCoracaoBranco from '../../img/favorite-white.svg';
import iconeCoracaoPreto from '../../img/favorite.svg';
import iconeComentario from '../../img/comment_icon.svg';
import iconeFavorito from '../../img/star.png';
import iconeSemFavorito from '../../img/star-white.png';
import share from '../../img/share.png';
import { SecaoComentario } from '../SecaoComentario/SecaoComentario';
class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
  };

  onClickCurtida = () => {
    if (this.state.curtido === false) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
        curtido: (this.state.curtido = true),
      });
      console.log('Curtiu!');
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
        curtido: (this.state.curtido = false),
      });
      console.log('Descurtiu, a foto é chata mesmo =/');
    }
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  onClickFavorito = () => {
    if (this.state.salvo === false) {
      this.setState({
        salvo: (this.state.salvo = true),
      });
      console.log('Curtiu!');
    } else {
      this.setState({
        salvo: (this.state.salvo = false),
      });
      console.log('Descurtiu, a foto é chata mesmo =/');
    }
  };

  render() {
    let iconeCurtida;
    let iconeSalvo;

    // TROCANDO ICONE CORAÇÃO
    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    // TROCANDO ICONE FAVORITO
    if (this.state.salvo) {
      iconeSalvo = iconeFavorito;
    } else {
      iconeSalvo = iconeSemFavorito;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    return (
      <>
        <div className={'post-container'}>
          <div className={'post-header'}>
            <img
              className={'user-photo'}
              src={this.props.fotoUsuario}
              alt={'Imagem do usuario'}
            />
            <p>{this.props.nomeUsuario}</p>
          </div>
          <img
            className={'post-photo'}
            src={this.props.fotoPost}
            alt={'Imagem do post'}
          />
          <div className={'post-footer'}>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />
            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />
            <IconeComContador
              icone={iconeSalvo}
              onClickIcone={this.onClickFavorito}
            />
            <IconeComContador
              icone={share}
              onClickIcone={this.onClickFavorito}
            />
          </div>
          {componenteComentario}
        </div>
      </>
    );
  }
}

export default Post;
