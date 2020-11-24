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

router.delete('/api/myrecipes/:recipe_id', (req, res) => {
  let {recipe_id} = req.params
  if (!recipe_id) return res.status(400).send("no id specified")

  db.removeMyRecipes(recipe_id)
      .then((deleted) => {
          res.sendStatus(200)
      })
      .catch(error => {
          res.sendStatus(500)
      })

})


