import React, { useState } from 'react';

import { Container } from './styles';

import Finish from '../Finish';


function Stage2(props) {
  const [stage, setStage] = useState(props.data);
  const [newStage, setNewStage] = useState(stage);

  const [course, setCourse] = useState();
  const [newCourse, setNewCourse] = useState();

  const [techingUnit, setTechingUnit] = useState();
  const [newTechingUnit, setNewTechingUnit] = useState();


  function handlePersonalData(e) {
    e.preventDefault();
    if (newCourse !== '' && newTechingUnit !== '') {
      setStage(newStage + 1);
    } else {
      alert('Favor Preencher os dados!');
    }
  }
  console.log(stage);
  if (stage === 2) {
    return (<Finish />);
  } else {
    return (
      <Container>
        <form>
          <h1>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
          <label>5. Qual Curso?</label>
          <input type="text" value={newCourse} onChange={e => setNewCourse(e.target.value)} />
          <label>6. Qual a unidade de ensino?</label>
          <input type="type" value={newTechingUnit} onChange={e => setNewTechingUnit(e.target.value)} />
          <button type="button" onClick={handlePersonalData}>Proxima etapa</button>
        </form>
      </Container>
    );
  }

}

export default Stage2;
