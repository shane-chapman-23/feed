const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Gets all recipes
router.get('/api/recipes', (req, res) => {
    db.getRecipes()
        .then(callback => res.json({ recipes: callback }))
        .catch(err => {
            res.status(500).send('something went wrong')
        })
})

//Get ingredients by id
router.get('/api/ingredients/:id', (req, res) => {
    const id = req.params.id
      db.getIngredients(id)
        .then(callback => {
          res.json({ingredients: callback})
        })
        .catch(err => {
          console.log(err)
            res.status(500).send('something went wrong')
        })
    })
    
    //get recipe steps by id
    router.get('/api/steps/:id', (req, res) => {
      const id = req.params.id
      db.getSteps(id)
        .then(callback => {
          res.json({steps: callback})
        })
        .catch(err => {
          console.log(err)
            res.status(500).send('something went wrong')
        })
    })