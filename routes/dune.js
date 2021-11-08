const duneService = require('../services/duneService');

const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("Dune-api-0.1-prealpha");
})

router.get('/houses', (req, res) => {
    res.send(duneService.getHouses());
})

router.get('/character', (req,res)=>{
    res.send(duneService.getCharacters());
})



module.exports = router;