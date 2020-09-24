import request from 'superagent'

export function getRecipes (id = 1)  {
  return request
    .get(`/api/recipes/${id}`)
    .then(res => res.body)
}