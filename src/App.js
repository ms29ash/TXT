import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import TextField from './Components/TextField';

function App() {
  const [mode, setMode] = useState('light')
  return (
    <>

      <Navbar mode={mode} setMode={setMode} />
      <TextField mode={mode} />
    </>
  );
}

export default App;
