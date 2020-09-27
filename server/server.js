const path = require('path')
const express = require('express')

const server = express()

const recipiesRoutes = require('./routes/recipes')
const favouritesRoutes = require('./routes/favourites')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

// Routes
server.use('/', recipiesRoutes)
server.use('/', favouritesRoutes)