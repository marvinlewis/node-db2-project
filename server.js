const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const carsRouter = require('./cars/carsRouter');
const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/cars', carsRouter);
server.get('/', (req, res) => {
    res.status(200).json({
        message : 'API is UP and WELL'
    })
})

module.exports = server;