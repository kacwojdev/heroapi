import axios from 'axios';

const ACCESS_TOKEN = 3394085567536662;

export const getBasicHeroById = id => {
    axios.get(`https://superhero.com/api/${ACCESS_TOKEN}`).then(data => {
        console.log(data);
    })
}