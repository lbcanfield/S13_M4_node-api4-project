require('dotenv').config();

const PORT = process.env.PORT || 1031;

const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/sanity-check', (request, response, next) => {
     response.json({
          message: 'This is a sanity check and it works'
     })
})

server.use('*', (request, response, next) => {
     response.send('<h1>EXPRESS APPLICATION</h1>')
});

server.use((error, request, response, next) => {
     response.status(500).json({
          message: error.message,
          stack: error.stack
     })
})

server.listen(PORT, () => {
     console.log(`Listening on port: ${PORT}`)
})