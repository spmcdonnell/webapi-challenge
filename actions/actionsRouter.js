const express = require('express');

const router = express.Router();

const db = require('../data/helpers/actionModel.js');

// GET STUFF
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

// POST STUFF
router.post('/', (req, res) => {
    const newAction = req.body;

    db.insert(newAction)
        .then(action => {
            res.status(201).json(action);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to add the action' });
        });
});

// PUT STUFF
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const actionInfo = req.body;

    db.update(id, actionInfo)
        .then(action => {
            res.status(201).json(action);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to update the action' });
        });
});

// DELETE STUFF
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.remove(id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to delete the action' });
        });
});

module.exports = router;
