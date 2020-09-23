const express = require('express')
const router = express.Router()

const development = require('./knexfile').development
const knex = require('knex')(development)

router.get('/', function (req, res) {
  res.render('form')
})