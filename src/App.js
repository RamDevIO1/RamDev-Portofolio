import React from 'react';
import useScript from './hooks/useScript.js'
import './App.css';

import Sidebar from './components/Sidebar/sidebar.jsx'

const App = () => {
  useScript('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js', 'type', 'module')
  useScript('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js', 'nomodule', '')
  
  return (
    <main>
      <Sidebar />
    </main>
  );
};

export default App;
