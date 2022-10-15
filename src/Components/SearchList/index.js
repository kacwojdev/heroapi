import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import HeroSimplified from '../HeroSimplified/index';
import { searchHeroByName } from '../../request.js';

const SearchList = () => {

    const { name } = useParams(); 
    const [searchedList, setSearchedList] = useState([]);

    useEffect(() => {
      fetchAndRenderSuperheroes();
    }, [name])

    const fetchAndRenderSuperheroes = async () => {
      const { superheroes } = await searchHeroByName();
      const filteredSuperheroes = superheroes.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
      setSearchedList(filteredSuperheroes);
    }

  return (
    <div>

        <h2>You searched for: {name}</h2>

        <div className="App__Grid">
            {searchedList.map(({name, powerstats, images}) => <HeroSimplified key={name} name={name} powerstats={powerstats} imgUrl={images.md} />)}
        </div>

    </div>
  )
}

export default SearchList