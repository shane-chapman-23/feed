import React from 'react'

const FavouriteItem = (props) => {
const {recipe_id} = props.favourite
  return (
    <tr>
      <td><img src={props.recipe[recipe_id]?.image} width='100px' height='100px'></img></td>
      <td><h4>{props.recipe[recipe_id]?.id}</h4></td>
      <td><h4>{props.favourite.recipe_id}</h4></td>
      <td><h4>{props.recipe[recipe_id]?.recipe_name}</h4></td>
      <td><button onClick={() => props.deleteFromFavourites(props.favourite.recipe_id)}>Delete</button></td>
    </tr>
  )
}

export default FavouriteItem
