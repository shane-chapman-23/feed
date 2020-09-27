import React from 'react'
import { connect } from 'react-redux'

import FavouriteListItem from './FavouriteListItem'

import { deleteFromFavourites } from '../actions'

/*
 * This is a stateful component to manage the state of the quantities
 * before the update button is selected. The Redux state isn't
 * updated until the Update button is selected but this component's
 * state is updated each time a quantity changes.
 */

class MyFavourites extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      favourites: props.favourites
    }
  }

  deleteItem = (id) => {
    const favourites = this.state.favourites.filter(item => item.id !== id)
    this.setState({ favourites })
    this.props.deleteFromFavourites(id)
  }

  render () {
    return (
      <div className='favourites'>
        <table>
          <thead>
            <tr>
              <td><h4>Recipes</h4></td>
            </tr>
          </thead>
          <tbody>
            {this.props.favourites.map((item, id) => {
              return (
                <FavouriteListItem key={id} item={item} deleteFromFavourites={this.deleteItem}/>
              )
          })}
          </tbody>
        </table>
        <p className='actions'>
          <button onClick={this.props.viewRecipes}>View more Recipes</button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    deleteFromFavourites: (id) => dispatch(deleteFromFavourites(id)),
    viewRecipes: () => dispatch({ type: 'CHANGE_PAGE', page: 'recipes' }),
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(MyFavourites)