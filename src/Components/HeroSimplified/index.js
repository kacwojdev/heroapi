import React from 'react'
import PowerStat from './_PowerStat/index';
import * as icons from '../../assets/index';
import './style.css'

const HeroSimplified = ({name, powerstats, imgUrl}) => {
  
  return (
    <section className="HeroSimplified">
        <h2 className="HeroSimplfied__Name">{name}</h2>
        <img className="HeroSimplified__Image" src={imgUrl} alt={`${name} photo`} />
        <div className="HeroSimplified__PowerstatsBox">
            {Object.keys(powerstats).map(key => <PowerStat icon={icons[key]} value={powerstats[key]} />)}
        </div>
    </section>
  )
}

export default HeroSimplified