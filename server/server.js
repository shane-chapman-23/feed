const path = require('path')
const express = require('express')

const server = express()

const recipesRoutes = require('./routes/recipes')
const shoppingListRoutes = require('./routes/shoppinglist')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

// Routes
server.use('/', recipesRoutes)
server.use('/', shoppingListRoutes)
