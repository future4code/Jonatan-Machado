import React from 'react';

function Video() {
  const tituloDoVideo = 'Título do vídeo';

  function reproduzVideo() {
    alert('O vídeo está sendo reproduzido');
  }
  return (
    <section className='painel-de-videos'>
      <div className='box-pagina-principal media1' onClick={reproduzVideo}>
        <img src='https://picsum.photos/400/400?a=1 ' alt='' />
        <h4>{tituloDoVideo}</h4>
      </div>
      <div className='box-pagina-principal media2' onClick={reproduzVideo}>
        <img src='https://picsum.photos/400/400?a=2 ' alt='' />
        <h4>{tituloDoVideo}</h4>
      </div>
      <div className='box-pagina-principal media3' onClick={reproduzVideo}>
        <img src='https://picsum.photos/400/400?a=3 ' alt='' />
        <h4>{tituloDoVideo}</h4>
      </div>
      <div className='box-pagina-principal media4' onClick={reproduzVideo}>
        <img src='https://picsum.photos/400/400?a=4 ' alt='' />
        <h4>{tituloDoVideo}</h4>
      </div>
      <div className='box-pagina-principal media5' onClick={reproduzVideo}>
        <img src='https://picsum.photos/400/400?a=5 ' alt='' />
        <h4>{tituloDoVideo}</h4>
      </div>
      <div className='box-pagina-principal media6' onClick={reproduzVideo}>
        <img src='https://picsum.photos/400/400?a=6 ' alt='' />
        <h4>{tituloDoVideo}</h4>
      </div>
      <div className='box-pagina-principal media7' onClick={reproduzVideo}>
        <img src='https://picsum.photos/400/400?a=7 ' alt='' />
        <h4>{tituloDoVideo}</h4>
      </div>
      <div className='box-pagina-principal media8' onClick={reproduzVideo}>
        <img src='https://picsum.photos/400/400?a=8 ' alt='' />
        <h4>{tituloDoVideo}</h4>
      </div>
    </section>
  );
}

export default Video;
