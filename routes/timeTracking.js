const timeTrackingService = require('../services/timeTrackingService');

const router = require('express').Router()

router.get('/data', (req,res) => {
    res.send(timeTrackingService.getData());
})

module.exports = router;