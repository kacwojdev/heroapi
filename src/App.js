import React, { useEffect, useState } from 'react';

import Nav from './Components/Nav/index';
import './App.css';

import { getBasicHeroById } from './request';

function App() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, [])

  const [featuredHeroesList, setFeaturedHero] = useState([]);

  const featuredHerosIds = [13, 505, 12];

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = []
    for (const heroId of featuredHerosIds) {
      const { data } = await getBasicHeroById(heroId);
      heroes.push(data);
    }


    setFeaturedHero(heroes);

  }

  return (
    <div className="App">
      <Nav />
      {featuredHeroesList.map(hero => <h1 key={hero.id}>{hero.name}</h1>)}
    </div>
  );
}

export default App;
