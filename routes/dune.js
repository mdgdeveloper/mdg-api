const duneService = require('../services/duneService');

const router = require('express').Router()


router.get('/houses', (req, res) => {
    res.send(duneService.getHouses());
})


module.exports = router;