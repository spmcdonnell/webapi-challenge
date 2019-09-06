const express = require('express');

const router = express.Router();

const db = require('../data/helpers/projectModel.js');

router.get('/', (req, res) => {
    db.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to retrieve projects' });
        });
});

module.exports = router;
