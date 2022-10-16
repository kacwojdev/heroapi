import React, { useEffect, useState } from 'react';

import { getBasicHeroById } from '../../request';

import HeroSimplified from '../HeroSimplified/index';
import './style.css';

const HeroesFeatured = () => {
    const [featuredHeroesList, setFeaturedHero] = useState([]);
    const featuredHerosIds = [13, 222, 36, 20, 23, 41];

    useEffect(() => {
        fetchAndRenderFeaturedHeroes();
    }, [])

    const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = []
        for (const heroId of featuredHerosIds) {
            const data = await getBasicHeroById(heroId);
            heroes.push(data);
        }
        setFeaturedHero(heroes);
    }

    return (
        <div className="App__Grid">
            {featuredHeroesList.map(({id, name, powerstats, imgUrl}) => <HeroSimplified key={name} heroId={id} name={name} powerstats={powerstats} imgUrl={imgUrl} />)}
        </div>
    )
}

export default HeroesFeatured