import React from 'react'
import {FaMinusCircle} from 'react-icons/fa'

const FavouriteItem = (props) => {
console.log(props)
const {recipe_id} = props.favourite
const deleteStyle = {color: 'red', marginRight: '7px', cursor: 'pointer'}
  return (
    <tr>
      <td><img src={props.recipe[recipe_id - 1]?.image} width='100px' height='100px'></img></td>
      <td><h4>{props.recipe[recipe_id - 1]?.recipe_name}</h4></td>
      <td>
        <FaMinusCircle
          style={deleteStyle}
          role='button'
          onClick={() => props.removeFavourite(props.favourite.recipe_id)}
        />
      </td>
    </tr>
  )
}

export default FavouriteItem
