import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Oval } from 'react-loader-spinner';

import HeroSimplified from '../HeroSimplified/index';
import { searchHeroByName } from '../../request.js';

const SearchList = () => {
    const { name } = useParams(); 
    const [searchedList, setSearchedList] = useState([]);
    const [isLoading, setLoader] = useState(true);

    useEffect(() => {
      setLoader(true);
      fetchAndRenderSuperheroes();
      setLoader(false);
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
            {!isLoading && searchedList.map(({name, powerstats, images}) => <HeroSimplified key={name} name={name} powerstats={powerstats} imgUrl={images.md} />)}
            {isLoading && <Oval />}
        </div>

    </div>
  )
}

export default SearchList