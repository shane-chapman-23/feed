const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Get recipes and display on main page
router.get('/api/recipes', (req, res) => {
  db.getRecipes()
    .then(callback => res.json(callback))
    .catch(err => {
        res.status(500).send('something went wrong')
  })
})


//Get ingredients and display on page
router.get('/api/ingredients/:id', (req, res) => {
const id = req.params.id
  db.getIngredients(id)
    .then(callback => {
      res.json({ingredients: callback})
    })
})

//get recipe steps
router.get('/api/steps/:id', (req, res) => {
  const id = req.params.id
  db.getSteps(id)
    .then(callback => {
      res.json({steps: callback})
    })
})