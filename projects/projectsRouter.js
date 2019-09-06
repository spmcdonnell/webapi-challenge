const express = require('express');

const router = express.Router();

const db = require('../data/helpers/projectModel.js');

// GET STUFF
router.get('/', (req, res) => {
    db.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to retrieve projects' });
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.get(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to retrieve project' });
        });
});

router.get('/:id/actions', (req, res) => {
    const id = req.params.id;

    db.getProjectActions(id)
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to retrieve project' });
        });
});

// POST STUFF
router.post('/', (req, res) => {
    const newProject = req.body;

    db.insert(newProject)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to add the project' });
        });
});

// PUT STUFF
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const projectInfo = req.body;

    db.update(id, projectInfo)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to update the project' });
        });
});

// DELETE STUFF
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.remove(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was a server error while attempting to delete the project' });
        });
});

module.exports = router;
