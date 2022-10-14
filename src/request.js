import axios from 'axios';

const ACCESS_TOKEN = 3394085567536662;


export const getBasicHeroById = async id => {
    const {data: powerstats}  = await axios.get(`https://akabab.github.io/superhero-api/api/powerstats/${id}.json`);
    const {data: full} = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
    return {name: full.name, powerstats, imgUrl: full.images.md}
}