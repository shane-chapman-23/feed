import {ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES, UPDATE_FAVOURITES} from '../actions'

const favourite = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return getNewFavourite(state, action.id)
    case DELETE_FROM_FAVOURITES:
      return state.filter(item => item.id !== action.id)
    case UPDATE_FAVOURITES:
      return action.favourite
    default:
      return state
  }
}

/*
 * Returns a new favourite array.
 * If the id already exists, the quantity will be incremented.
 * If the id doesn't exists, it will be added with a quantity of 1.
 */
function getNewFavourite (favourite, id) {
  let exists = false
  const newFavourite = favourite.map(item => {
    if (item.id === id) {
      item.quantity += 1
      exists = true
    }
    return item
  })

  if (exists) {
    return newFavourite
  } else {
    newFavourite.push({id: id, quantity: 1})
    return newFavourite
  }
}

export default favourite