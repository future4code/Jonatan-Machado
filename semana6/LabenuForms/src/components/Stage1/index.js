import React, { useState } from 'react';

import { Container } from './styles';

import Stage2 from '../Stage2';
import Stage3 from '../Stage3';

function Stage1() {
  const [stage, setStage] = useState(0);

  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');

  const [age, setAge] = useState(0);
  const [newAge, setNewAge] = useState(0);

  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const [school, setSchool] = useState('');
  const [newSchool, setNewSchool] = useState('');


  function handlePersonalData(e) {
    e.preventDefault();
    if (newName !== '' && newAge !== 0 && newEmail !== '' && newSchool !== '') {
      setStage(stage + 1);
    } else {
      alert('Favor Preencher os dados!');
    }
    setName(newName);
    setAge(newAge);
    setEmail(newEmail);
    setSchool(newSchool);
    console.log(newName, newAge, newEmail, newSchool);
  }

  const currentStage = stage;
  if (stage === 1) {
    if (newSchool === 'Médio Incompleto' || newSchool === 'Superior Incompleto') {
      return (<Stage3 data={currentStage} />);
    }
    return (<Stage2 data={currentStage} />);
  }
  return (
    <Container>
      <label> 1. Nome:</label >
      <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
      <label> 2. Qual sua idade?</label >
      <input type="number" value={newAge} onChange={e => setNewAge(e.target.value)} />
      <label> 3. Qual seu email?</label >
      <input type="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} />
      <select value={newSchool} onChange={e => setNewSchool(e.target.value)}>
        <option value="" >Escolha uma Opção</option>
        <option value="Médio Incompleto" >Ensino Médio Incompleto</option>
        <option value="Médio Completo" >Ensino Médio Completo</option>
        <option value="Superior Incompleto">Ensino Superior Incompleto</option>
        <option value="Superior Completo">Ensino Superior Completo</option>
      </select>
      <button type="button" onClick={handlePersonalData}>Proxima etapa</button>
    </Container>
  );

}

export default Stage1;
