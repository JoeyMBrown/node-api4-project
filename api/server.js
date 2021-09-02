const express = require('express');
const cors = require('cors')

const server = express();

server.use(express.json());
server.use(cors());

server.get('/api/users', (req, res) => {
    res.status(200).json([{name: "Jordan"}, {name: "Pablo"}, {name: "weenies"}])
})

server.post('/api/register', (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.status(400).json({ message: 'bad request, try adding a username and password dude'})
    } else {
        const newUser = {
            username: req.body.username,
            password: req.body.password
        }
    
        res.status(201).json(newUser)
    }
})

server.post('/api/login', (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.status(400).json({ message: 'bad request, try adding a username and password dude'})
    } else {
        const welcomeMessage = `Hello, ${req.body.username}!  Welcome to the server!`

        res.status(200).json({ message: welcomeMessage})
    }
})

module.exports = server;
