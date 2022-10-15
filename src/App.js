import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom';

import Nav from './Components/Nav/index';
import HeroesFeatured from './Components/HeroesFeatured/index';
import SearchList from './Components/SearchList/index';
import Footer from './Components/Footer/index';
import './App.css';
import './index.css';


function App() {
  

  return (
    <div className="Container">
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<HeroesFeatured />} />
            <Route path="/search/:name" element={<SearchList />} />
            <Route path="/hero/:id" />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
