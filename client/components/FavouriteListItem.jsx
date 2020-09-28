import React from 'react'

const FavouriteItem = (props) => {

  return (
    <tr>
      <td><img src={props.item.image} width='100px' height='100px'></img></td>
      <td><h4>{props.item.id}</h4></td>
      <td><h4>{props.item.recipe_id}</h4></td>
      <td><h4>{props.item.recipe_name}</h4></td>
      <td><button onClick={() => props.deleteFromFavourites(props.item.id)}>Delete</button></td>
    </tr>
  )
}

export default FavouriteItem
