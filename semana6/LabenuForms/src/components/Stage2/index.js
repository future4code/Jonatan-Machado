import React, { useState } from 'react';

// import { Container } from './styles';

import Stage3 from '../Stage3'

function Stage2(props) {
  const [stage, setStage] = useState(props.data);

  function handlePersonalData(e) {
    e.preventDefault()
    setStage(stage + 1);
  }
  console.log(stage)
  if (stage === 2) {
    return (<Stage3 />)
  }
  return (
    <form onSubmit={handlePersonalData}>
      <h1>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
      <label>5. Qual Curso?</label>
      <input type="text" />
      <label>6. Qual a unidade de ensino?</label>
      <input type="number" />
      <button >Proxima etapa</button>
    </form>
  );

}

export default Stage2;
