const express = require('express');

const router = express.Router();

const db = require('../data/helpers/actionModel.js');

router.get('/', (req, res) => {
    db.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to retrieve actions' });
        });
});

module.exports = router;
