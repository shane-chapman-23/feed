import React from 'react'
import {connect} from 'react-redux'

import FavouriteListItem from './FavouriteListItem'
import ShoppingList from './ShoppingList'
import RecipeList from './RecipeList'

import {deleteFromFavourites, fetchIngredients, fetchFavourites} from '../actions'
import {getIngredients, getFavourites} from '../api'

class MyFavourites extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      favourites: props.favourites,
      showMore: false
    }
  }

  componentDidMount(){
    getIngredients()
          .then(ingredients => {
            this.props.dispatch(fetchIngredients(ingredients))
          }) 
          .then (() => getFavourites()) 
          .then(favourites => {
            this.props.dispatch(fetchFavourites(favourites))
          }) 
  }

  deleteItem = (id) => {
    const favourites = this.state.favourites.filter(item => item.id !== id)
    this.setState({ favourites })
    this.props.deleteFromFavourites(id)
  }

  clickHandler = () => {
    this.setState({ showMore: !this.state.showMore })
}

  render () {
  console.log(this.props.favourites)
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
        <button onClick={this.clickHandler}>Generate A Shopping List</button>
        {this.state.showMore && <ShoppingList />}

        <div>
          
        </div>
      </div>
      

    )
  }
}

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    viewRecipes: () => dispatch({ type: 'CHANGE_PAGE', page: 'recipes' }),
    deleteFromFavourites: (id) => dispatch(deleteFromFavourites(id)),  
    dispatch: action => dispatch(action)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(MyFavourites)