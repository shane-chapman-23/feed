const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Get favourites as javascript values
router.get('/api/favourites/:id', (req, res) => { 
  const id = 1 //req.params.id  
  db.getFavourites(id)
        .then(favourites => {
        //console.log(favourites)
        res.send(favourites)
    })
})