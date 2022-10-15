import React from 'react';

import Nav from './Components/Nav/index';
import HeroesFeatured from './Components/HeroesFeatured/index';
import Footer from './Components/Footer/index';
import './App.css';
import './index.css';


function App() {
  

  return (
    <div className="Container">
      <div className="App">
        <Nav />
        <div className="App__Grid">
          <HeroesFeatured />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
