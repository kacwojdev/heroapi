import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Oval } from 'react-loader-spinner';

import HeroSimplified from '../HeroSimplified/index';
import { searchHeroByName } from '../../request.js';
import './style.css';

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
    <div className="SearchList">
        <h2 className="SearchList__Info">You searched for: {name}</h2>
        <div className="App__Grid">
            {!isLoading && searchedList.map(({id, name, powerstats, images}) => <HeroSimplified key={name} name={name} heroId={id} powerstats={powerstats} imgUrl={images.md} />)}
            {isLoading && <Oval />}
        </div>

    </div>
  )
}

export default SearchList