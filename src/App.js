import React, { useEffect } from 'react';

import Nav from './Components/Nav/index';
import './App.css';

import { getBasicHeroById } from './request';

function App() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, [])

  const featuredHerosIds = [13, 505, 12];

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = []
    for (const heroId of featuredHerosIds) {
      const hero = await getBasicHeroById(heroId);
      heroes.push(hero.data)
    }


    console.log(heroes);

  }

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
