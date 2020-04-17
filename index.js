// SINCE NODEMON LISTEN ON INDEX.JS, SET UP SERVER LISTENER HERE ON PORT 4000
const express = require('express');
const server = require('./server');

server.listen(4000, () => {
    console.log("=== API RUNNING ON PORT 4000 ===")
})
