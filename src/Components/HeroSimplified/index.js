import React from 'react'
import './style.css'

const HeroSimplified = ({name, powerstats, imgUrl}) => {
  return (
    <section className="HeroSimplified">
        <h2 className="HeroSimplfied__Name">{name}</h2>
        <img className="HeroSimplified__Image" src={imgUrl} alt={`${name} photo`} />
        <div className="HeroSimplified__PowerstatsBox">
            <p>{powerstats.intelligence}</p>
            <p>{powerstats.strength}</p>
            <p>{powerstats.speed}</p>
            <p>{powerstats.durability}</p>
            <p>{powerstats.power}</p>
            <p>{powerstats.combat}</p>
        </div>
    </section>
  )
}

export default HeroSimplified