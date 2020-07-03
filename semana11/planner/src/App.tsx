import React, { useState, useEffect } from 'react';
import ListTask from './components/ListTasks';
import CreateTask from './components/CreateTasks';

function App() {
  return (
    <>
      <ListTask />
      <CreateTask />
    </>
  );
}

export default App;
