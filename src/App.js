import React from 'react';
import useScript from './hooks/useScript.js'
import './App.css';

import Sidebar from './components/Sidebar/sidebar.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import About from './components/About/about.jsx'

const App = () => {
  useScript('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js', 'type', 'module')
  useScript('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js', 'nomodule', '')

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <About />
      </div>
    </main>
  );
};

export default App;
