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


