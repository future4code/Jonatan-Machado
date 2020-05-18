import React, { useState } from 'react';

// import { Container } from './styles';

function Stage3(props) {
  const [stage, setStage] = useState(props.data);

  function handlePersonalData(e) {
    e.preventDefault()

  }
  return (
    <form onSubmit={handlePersonalData}>
      <h1>Etapa 2 - INFORMAÇÕES GERAIS DE ENSINO</h1>
      <label>5. Porque você não terminou um curso de graduação?</label>
      <input type="text" />
      <label>6. Você tem algum curso complementar?</label>
      <select name="" id="">
        <option value="">Nenhum</option>
        <option value="">Curso Técnico</option>
        <option value="">Curso de Inglês</option>
      </select>
      <button >Proxima etapa</button>
    </form>
  );

}

export default Stage3;
