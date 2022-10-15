import React, {useState, useEffect} from 'react'
import './style.css'

const Nav = () => {
  const [searchedName, setSearchedName] = useState('');

  useEffect(() => {
    console.log('you searched the name of ', searchedName);
  }, [searchedName])

  return (
    <nav>
      <div className="App__Title"><span className="App__Title--Decor">Super</span>heroes</div>
      <form>
        <label>Find your superhero: </label>
        <input onChange={event => {setSearchedName(event.target.value)}} value={searchedName} placeholder="type his name here..." htmlFor="name" />
      </form>
    </nav>
  )
}

export default Nav