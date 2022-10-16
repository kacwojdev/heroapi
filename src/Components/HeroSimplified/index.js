import React from 'react'
import { Link } from 'react-router-dom';
import PowerStat from '../PowerStat/index';
import * as icons from '../../assets/index';
import './style.css'

const HeroSimplified = ({heroId, name, powerstats, imgUrl}) => {
  
  return (
    <section className="HeroSimplified">
        <h2 className="HeroSimplfied__Name">{name}</h2>
        <Link to={`/hero/${heroId}`}>
            <img className="HeroSimplified__Image" src={imgUrl} alt={`${name} photo`} />
        </Link>
        <div className="HeroSimplified__PowerstatsBox">
            {Object.keys(powerstats).map(key => <PowerStat icon={icons[key]} value={powerstats[key]} />)}
        </div>
    </section>
  )
}

export default HeroSimplified