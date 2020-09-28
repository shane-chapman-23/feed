const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Add favourites
router.post('/api/favourites', (req, res) => {
    let {user_id, recipe_id} = req.body
        db.addFavourite({user_id, recipe_id})
            .then((ids) => {
                res.status(201).json({id: ids[0]})
            })
})

//Get favourites as javascript values
router.get('/api/favourites/:id', (req, res) => { 
  const id = 1 //req.params.id  
  db.getFavourites(id)
        .then(favourites => {
        console.log(favourites)
        res.send(favourites)
    })
})