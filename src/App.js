import React from 'react';
import useScript from './hooks/useScript.js'
import './App.css';
setAttribute
const App = () => {
  useScript('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js', 'module')
  React.useEffect(() => {
    const script2 = document.createElement('script');
    script2.src = 'url';
    script2.async = true;
    script2.setAttribute('nomodule', 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js')
    document.body.appendChild(script2);
    return () => {
      document.body.removeChild(script2);
    }
  }, []);
  
  
  return (
    <div>
      Hallo Code 
      <ion-icon name="mail-outline"></ion-icon>
    </div>
  );
};

export default App;
