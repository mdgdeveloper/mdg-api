const duneService = require('../services/duneService');

const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("Dune-api-0.1-prealpha");
})

router.get('/houses', (req, res) => {
    res.send(duneService.getHouses());
})

router.get('/characters', (req,res)=>{
    // const list = duneService.getCharacters();
    const result = duneService.getCharacters().map( (character) => {
        const value = {
            id: character.id,
            name: character.name,
        }
        const house = duneService.getHouse(character.house_id);
        return {...value, house};
    });
    res.send(result);
})



module.exports = router;