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

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.get(id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to retrieve action' });
        });
});

module.exports = router;
