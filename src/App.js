import React, { useState } from 'react'
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextField from './Components/TextField';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState('');

  const toggleAlert = (text) => {
    setAlert(text);

    setTimeout(() => {

      setAlert('');
    }, 2000);
  }

  return (
    <>

      <Navbar mode={mode} setMode={setMode} toggleAlert={toggleAlert} />
      <TextField mode={mode} toggleAlert={toggleAlert} />
      <Alert alert={alert} />
    </>
  );
}

export default App;
