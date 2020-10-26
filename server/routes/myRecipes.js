const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router


router.get('/api/myrecipes', (req, res) => { 
  db.getMyRecipes()
        .then(callback => res.json({myRecipes: callback}))
        .catch(err => {
            res.status(500).send('something went wrong')
        })
})

router.post('/api/myrecipes', (req, res) => {
  let recipe_id = req.body
    db.addMyRecipes(recipe_id)
      .then((ids) => {
        res.status(201).json({id: ids[0]})
      })
})


