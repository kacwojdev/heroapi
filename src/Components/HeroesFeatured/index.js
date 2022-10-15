import React, { useEffect, useState } from 'react';

import { getBasicHeroById } from '../../request';

import HeroSimplified from '../HeroSimplified/index';

const HeroesFeatured = () => {
    useEffect(() => {
        fetchAndRenderFeaturedHeroes();
    }, [])

    const [featuredHeroesList, setFeaturedHero] = useState([]);

    const featuredHerosIds = [13, 200, 36, 20, 23, 41];

    const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = []
        for (const heroId of featuredHerosIds) {
            const data = await getBasicHeroById(heroId);
            heroes.push(data);
        }
        setFeaturedHero(heroes);
    }

    return (
        <>
            {featuredHeroesList.map(({name, powerstats, imgUrl}) => <HeroSimplified key={name} name={name} powerstats={powerstats} imgUrl={imgUrl} />)}
        </>
    )
}

export default HeroesFeatured