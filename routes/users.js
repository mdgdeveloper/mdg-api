const express = require('express');
const router = express.Router();

const users = [];

router.get('/users', (req, res) => {
    res.send(users);
})

router.post('/user/create', (req, res) => {
    const {name} = req.body;
    if (name) {
        users.push({name});
        res.json({ ok: true, users})
    }
})



module.exports = router;