import request from 'supertest'
import server from '../server'

import { getFavourites, addFavourite, deleteFavourite } from '../db'

jest.mock('../db', () => ({
    getFavourites: jest.fn(),
    addFavourite: jest.fn(),
    deleteFavourite: jest.fn()
  }))
    
describe('GET /api/favourites/:id', (req, res) => {
  test('returns favourite recipe', () => {
    getFavourites.mockImplementation(() => Promise.resolve([
      {id: 1, recipe_name: 'Beef Kebabs'}
    ]))
    return request(server)
      .get('GET /api/favourites/:id')
      .then (res => {
        expect(res.status).toBe(200)
        expect(res.body.length).toBe(1)
    })
    .catch(error => {
      res.sendStatus(500)
    })
  })
  test('return 500 if database blows up', () => {
    getFavourites.mockImplementation(() => Promise.reject('error'))
    return request(server)
      .get('/api/favourites/:id')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.text).toHaveContents(/Beef/)
      })
  })
})

describe('POST /api/favourites', (req, res) => {
  test('post to favourites', () => {
    let {user_id, recipe_id} = req.body
    addFavourite.mockImplementation(() => Promise.resolve(
      db.addFavourite({user_id, recipe_id})
      .then((ids) => {
        res.status(200).json({id: ids[0]})
      })
      .catch(error => {
        res.sendStatus(500)
      })
    ),)
  })
})

describe('DELETE /api/favourites/:recipe_id', (req, res) => {
  let {recipe_id} = req.params
  
  if(!recipe_id)
    return res.status(400)
      .send('no id specified')

  deleteFavourite.mockImplementation(() => Promise.resolve(
    db.deleteFavourite(Number(recipe_id))
    .then(res.sendStatus(200))
  ))
  .catch(error => {
    res.sendStatus(500)
  })
})
