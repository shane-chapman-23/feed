import React from 'react'

const FavouriteItem = (props) => {

  return (
    <tr>
      <td><h4>{props.item.recipe_name}</h4></td>
      <td><button onClick={() => props.deleteFromFavourites(props.item.id)}>Delete</button></td>
    </tr>
  )
}

export default FavouriteItem
