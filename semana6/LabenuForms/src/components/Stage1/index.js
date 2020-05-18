import React, { useState } from 'react';

// import { Container } from './styles';

import Stage2 from '../Stage2'

function Stage1() {
  const [stage, setStage] = useState(0);

  const [name, setName] = useState('')
  const [newName, setNewName] = useState('')

  const [age, setAge] = useState(0)
  const [newAge, setNewAge] = useState(0)

  const [email, setEmail] = useState('')
  const [newEmail, setNewEmail] = useState('')

  const [school, setSchool] = useState(1)
  const [newSchool, setNewSchool] = useState(1)


  function handlePersonalData(e) {
    e.preventDefault()
    setName(newName)
    setAge(newAge)
    setEmail(newEmail)
    setSchool(newSchool)
    console.log(newName, newAge, newEmail, newSchool)
  }

  const currentStage = stage;
  if (stage === 1) {
    return (<Stage2 data={currentStage} />)
  }
  return (
    <>
      <label> 1. Nome:</label >
      <input value={newName} onChange={e => setNewName(e.target.value)} />
      <label> 2. Qual sua idade?</label >
      <input value={newAge} onChange={e => setNewAge(e.target.value)} />
      <label> 3. Qual seu email?</label >
      <input value={newEmail} onChange={e => setNewEmail(e.target.value)} />
      <select name="" id="">
        <option value={1} onChange={e => setNewSchool(e.target.value)}>Ensino Médio Incompleto</option>
        <option value={2} onChange={e => setNewSchool(e.target.value)}>Ensino Médio Completo</option>
        <option value={3} onChange={e => setNewSchool(e.target.value)}>Ensino Superior Incompleto</option>
        <option value='4' onChange={e => setNewSchool(e.target.value)}>Ensino Superior Completo</option>
      </select>
      <button type="button" onClick={handlePersonalData}>Proxima etapa</button>
    </>
  )

}

export default Stage1;
