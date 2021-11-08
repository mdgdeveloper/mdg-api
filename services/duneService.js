const data = require('../data/dune.js');

const getHouses = () => {
    return data.houses;
}

const getCharacters = () => {
    return data.characters;
}

const getHouse = ( houseID ) => {
    return (data.houses.filter( house => house.id === houseID));
}

module.exports = { getHouses, getCharacters, getHouse };