import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getHeroById } from '../../request';
import PowerStat from '../PowerStat';
import './style.css';

const HeroDetails = () => {
    useEffect(() => {
        fetchAndRenderHeroDetailed();
    }, heroDetailed)

    const { heroId } = useParams();
    const [heroDetailed, setHeroDetailed] = useState([]);

    const fetchAndRenderHeroDetailed = async () => {
        const { superhero } = await getHeroById(heroId);
        setHeroDetailed([superhero]);
    }

    return (
        <div className="HeroDetailed">
           {heroDetailed.map(({images}) => <img src={images.lg} alt="superhero" />)}
           {heroDetailed.map(({name, appearance, biography}) => <HeroDetailsInfos fullName={name} biography={biography} appearance={appearance} />)}
        </div>
    )
}

const HeroDetailsInfos = ({name, appearance, biography}) => {
    return (
        <div className="HeroDetailed__InfoBox">
            <h2 className="HeroDetailed__Name">{name} <span>{biography.fullName}</span></h2>
            <div className="HeroDetailed__Appearance__One">
                <span className="HeroDetailed--CategoryName">HEIGHT:</span>
                <p>{appearance.height[1]}</p>
                <span className="HeroDetailed--CategoryName">WEIGHT:</span>
                <p>{appearance.weight[1]}</p>
            </div>
            <div className="HeroDetailed__Appearance__Two">
                <span className="HeroDetailed--CategoryName">EYES:</span>
                <p>{appearance.eyeColor}</p>
                <span className="HeroDetailed--CategoryName">HAIR:</span>
                <p>{appearance.hairColor}</p>
            </div>
            <div className="HeroDetailed__Biography">
                <span className="HeroDetailed--CategoryName">UNIVERSE:</span>
                <p>{biography.publisher}</p>
                <span className="HeroDetailed--CategoryName">OTHER ALIASES:</span>
                {biography.aliases.map(alias => <p>{alias}</p>)}
                <span className="HeroDetailed--CategoryName">PLACE OF ORIGIN:</span>
                <p>{biography.placeOfBirth}</p>
                <span className="HeroDetailed--CategoryName">ALIGNMENT:</span>
                <p>{biography.algnment}</p>
            </div>
        </div>
    )
}

export default HeroDetails;