import nock from 'nock'
import { getRecipes } from './api'

test('API fetches recipes from server', () => {
  nock(/localhost/)
    .get('/api/recipes/1')
    .reply(200, [{ id: 1, name:'Caramelised Pork & Garlic Rice'}])

  return getRecipes()
    .then(recipes => {
      expect.assertions(2)
      expect(recipes.length).toBe(1)
      expect(recipes[0].id).toBe(1)
    })
})