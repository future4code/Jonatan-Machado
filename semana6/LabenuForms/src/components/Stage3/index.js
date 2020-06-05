import React, { useState } from 'react';

import { Container } from './styles';

import Finish from '../Finish';

function Stage3(props) {
  const [stage, setStage] = useState(props.data);
  const [newStage, setNewStage] = useState(stage);

  const [info, setInfo] = useState('');
  const [newInfo, setNewInfo] = useState('');
  const [school, setSchool] = useState('');
  const [newSchool, setNewSchool] = useState('');

  function handlePersonalData(e) {
    e.preventDefault();
    setSchool(newSchool);
    if (newInfo !== '' && newSchool !== '') {
      setStage(newStage + 1);
      console.log(stage);
    } else {
      alert('Favor Preencher os dados!');
    }

  }
  if (stage === 2) {
    return (<Finish />);
  } else {
    return (
      <Container>
        <form >
          <h1>Etapa 2 - INFORMAÇÕES GERAIS DE ENSINO</h1>
          <label>5. Porque você não terminou um curso de graduação?</label>
          <input type="text" value={newInfo} onChange={e => setNewInfo(e.target.value)} />
          <label>6. Você tem algum curso complementar?</label>
          <select value={newSchool} onChange={e => setNewSchool(e.target.value)}>
            <option value="">Selecione uma Opção</option>
            <option value="Nenhum">Nenhum</option>
            <option value="Curso técnico">Curso Técnico</option>
            <option value="Curso de Inglês">Curso de Inglês</option>
          </select>
          <button type="button" onClick={handlePersonalData}>Proxima etapa</button>
        </form>
      </Container>
    );
  }
}

export default Stage3;
