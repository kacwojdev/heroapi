import axios from 'axios';

export const getBasicHeroById = async id => {
    const {data: powerstats}  = await axios.get(`https://akabab.github.io/superhero-api/api/powerstats/${id}.json`);
    const {data: full} = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
    return {name: full.name, powerstats, imgUrl: full.images.md}
}

export const searchHeroByName = async () => {
    const { data } = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
    return {superheroes: data}
}