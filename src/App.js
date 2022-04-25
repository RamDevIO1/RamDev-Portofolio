import React from 'react';
import useScript from './hooks/useScript.js'
import './App.css';

const App = () => {
  useScript('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js', 'type', 'module')
  useScript('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js', 'nomodule', '')
  
  return (
    <div>
      Hallo Code 
      <ion-icon name="mail-outline"></ion-icon>
    </div>
  );
};

export default App;
