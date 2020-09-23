const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Get user and display on main page
router.get('/api/recipes', (req, res) => {
  db.getRecipes()
    .then(callback => {
      res.json({recipes: callback})
    })
})