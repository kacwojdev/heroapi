import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getHeroById } from '../../request';
import PowerStat from '../PowerStat';

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
        <div>
           {heroDetailed.map(({images}) => <img src={images.lg} alt="superhero" />)}
           {heroDetailed.map(({name, biography}) => <HeroDetailsInfos fullName={name} biography={biography} />)}
        </div>
    )
}

const HeroDetailsInfos = (fullName, {alignment, alterEgos, firstAppearence, placeOfBirth, publisher}) => {
    return (
        <div>
            <h2>{fullName}</h2>
            <p>{alignment}</p>
            <p>{alterEgos}</p>
            <p>{firstAppearence}</p>
            <p>{placeOfBirth}</p>
            <p>{publisher}</p>

        </div>
    )
}

export default HeroDetails;