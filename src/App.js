import React from 'react';
import Mainpage from './Mainpage';
import { MapProvider } from './MapContext';
import './App.css';

function App() {
  
  return (
    <MapProvider>
      <div className="App">
        <Mainpage />
      </div>
    </MapProvider>
  );
}

export default App;