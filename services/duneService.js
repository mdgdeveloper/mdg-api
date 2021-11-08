const data = require('../data/dune.js');

const getHouses = () => {
    return data.houses;
}

const getCharacters = () => {
    return data.characters;
}

module.exports = { getHouses, getCharacters };