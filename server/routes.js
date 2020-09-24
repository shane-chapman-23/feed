const express = require('express')
const router = express.Router()

const development = require('./knexfile').development
const knex = require('knex')(development)