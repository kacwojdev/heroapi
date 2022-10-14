import axios from 'axios';

const ACCESS_TOKEN = 3394085567536662;


export const getBasicHeroById = id => {
    return axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
}