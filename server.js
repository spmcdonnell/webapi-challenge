const express = require('express');

const server = express();

const actionsRouter = require('./actions/actionsRouter.js');
const projectsRouter = require('./projects/projectsRouter.js');

//custom middleware
server.use(express.json());
server.use('/actions', actionsRouter);
server.use('/projects', projectsRouter);

//requests

server.get('/', (req, res) => {
    res.send(`<h1>Root URL is working</h1>`);
});

module.exports = server;
