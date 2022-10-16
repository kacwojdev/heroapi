import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { searchHeroByName } from '../../request';
import './style.css'

const Nav = () => {
  const [searchedName, setSearchedName] = useState('');

  useEffect(() => {
      
  }, [searchedName])

  return (
    <nav>
      <Link to="/">
        <div className="App__Title"><span className="App__Title--Decor">Super</span>heroes</div>
      </Link>
      <div className="App__SearchBar">
        <input onChange={event => {setSearchedName(event.target.value)}} value={searchedName} placeholder="Type your favourite super hero name ..." htmlFor="name" />
        <Link to={`/search/${searchedName}`}>
          <button>Find</button>
        </Link>
        <div className="App__SearchBar__Hints">
        </div>
      </div>
    </nav>
  )
}

export default Nav