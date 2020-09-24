import React from 'react'
import {connect} from 'react-redux'

import FavouriteListItem from './FavouriteListItem'

import {deleteFromFavourites, updateFavourites} from '../actions'

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
      favourite: props.favourite
    }
  }

  update = (id, quantity) => {
    this.setState({
      favourite: this.state.favourite.map(item => {
        if (item.id === id) item.quantity = Number(quantity)
        return item
      })
    })
  }

  deleteItem = (id) => {
    const favourite = this.state.favourite.filter(item => item.id !== id)
    this.setState({ favourite })
    this.props.deleteFromFavourites(id)
  }

  render () {
    return (
      <div className='favourites'>
        <table>
          <thead>
            <tr>
              <td>Recipe</td>
              <td>Quantity</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {this.props.favourite.map((item, id) => {
              return (
                <FavouriteListItem key={id}
                  item={item}
                  update={this.update}
                  deleteFromFavourites={this.deleteFromFavourites}
                />
              )
          })}
          </tbody>
        </table>
        <p className='actions'>
          <a href='#' onClick={this.props.keepShopping}>Look at more Recipes</a>
          <button onClick={() => this.props.updateFavourites(this.state.favourite)}>Update</button>
          <button className='button-primary'>Add to Shopping List</button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favourite: state.favourite
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    keepShopping: () => dispatch(changePage('recipes')),
    deleteFromFavourites: (id) => dispatch(deleteFromFavourites(id)),
    updateFavourites: (favourite) => dispatch(updateFavourites(favourite))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(MyFavourites)