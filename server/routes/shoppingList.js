const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router


router.get('/api/shoppinglist', (req, res) => { 
  db.getShoppingList()
        .then(callback => res.json({shoppingList: callback}))
        .catch(err => {
            res.status(500).send('something went wrong')
        })
})

router.post('/api/shoppinglist', (req, res) => {
  let recipe_id = req.body
    db.addShoppingList(recipe_id)
      .then((ids) => {
        res.status(201).json({id: ids[0]})
      })
})


