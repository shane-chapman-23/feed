import React from 'react'
import { connect } from 'react-redux'

import FavouriteListItem from './FavouriteListItem'
import ShoppingList from './ShoppingList'

import { removeFavourite, fetchFavourites, fetchRecipes } from '../actions'
import { getFavourites, deleteFavourite, getRecipes } from '../api'

class MyFavourites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: props.recipe,
      favourites: props.favourites,
      ingredients: props.ingredients,
      showMore: false
    }
  }

  componentDidMount() {
    getFavourites()
      .then(favourites => {
        this.props.dispatch(fetchFavourites(favourites))
      })
      .then(() => getRecipes())
      .then(recipes => {
        this.props.dispatch(fetchRecipes(recipes))
      })
  }

  deleteItem = (recipe_id) => {
    deleteFavourite(recipe_id)
      .then(() => {
        this.props.dispatch(removeFavourite(recipe_id))
      })
  }

  clickHandler = () => {
    this.setState({ showMore: !this.state.showMore })
  }

  render() {
    return (
      <div className='favourites'>
        <div className="printHidden">
        <table>
          <thead>
            <tr>
              <td><h4>Recipes</h4></td>
            </tr>
          </thead>
          <tbody>
            {this.props.favourites.map((favourite, id) => {
              return (
                <FavouriteListItem key={id} favourite={favourite} removeFavourite={this.deleteItem} recipe={this.props.recipes} />
              )
            })}
          </tbody>
        </table>
        <button onClick={this.props.viewRecipes}>View more Recipes</button>
        <button onClick={this.clickHandler}>Generate A Shopping List</button>
      </div>    
      {this.state.showMore && <div className="hide" onClick={this.clickHandler}></div>}  
       {this.state.showMore && 
        <div className="recipe-content">
       <ShoppingList ingredients={this.props.ingredients}/>
       </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    favourites: state.favourites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewRecipes: () => dispatch({type: 'CHANGE_PAGE', page: 'recipes'}),
    removeFavourite: (recipe_id) => dispatch(removeFavourite(recipe_id)),
    dispatch: action => dispatch(action)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFavourites)