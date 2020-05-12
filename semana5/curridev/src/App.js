import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://avatars0.githubusercontent.com/u/38142909?s=460&u=3a4996180ca55f96930e91a0471893a5490cf003&v=4"
          nome="Jonatan Machado"
          descricao="Desenvolvedor Fullstack em node, react e react native"
        />
        <CardPequeno
          imagem="https://image.flaticon.com/icons/svg/732/732200.svg"
          texto="Email: jonatanmachado35@gmail.com"
        />
        <CardPequeno
          imagem="https://image.flaticon.com/icons/svg/1798/1798911.svg"
          texto="Endereço: Rua Passo da Figueira Nº191 - Alvorada - RS Brasil"
        />
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3-sa-east-1.amazonaws.com/99freelas/profile/210x210/fuston-services.png?m=1557372324817"
          nome="Fs Aplicativos"
          descricao="Desenvolvedor em React Native e Node.Js"
        />
        <CardGrande
          imagem="http://fulldesignestrategico.com/assets/images/logo.png"
          nome="Full Design Estratégico"
          descricao="Desenvolvi o site com php e bootstrap"
        />

        <CardGrande
          imagem="https://image.isu.pub/160809214113-71f66bfb3cf191618c4ab613056429db/jpg/page_1_thumb_large.jpg"
          nome="CottonMe"
          descricao="Suporte em Magento"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          link="https://www.facebook.com/jonatan.machado68"
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          link="http://twitter.com/joninter"
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
        <ImagemButton
          link="https://www.linkedin.com/in/jonatan-machado/"
          imagem="https://imagens.canaltech.com.br/empresas/4142.400.jpg"
          texto="LinkeDin"
        />
      </div>
    </div>
  );
}

export default App;
