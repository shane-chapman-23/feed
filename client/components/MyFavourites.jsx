import React from 'react'
import {connect} from 'react-redux'

import FavouriteListItem from './FavouriteListItem'
import ShoppingList from './ShoppingList'

import {removeFavourite, fetchFavourites, fetchRecipes} from '../actions'
import {getFavourites, deleteFavourite, getRecipes} from '../api'

class MyFavourites extends React.Component {
  constructor (props) {
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

  // deleteItem = (recipe_id) => {
  //   const favourites = this.state.favourites.filter(favourite => favourite.recipe_id !== recipe_id)
  //   this.setState({ favourites })
  //   this.props.deleteFromFavourites(recipe_id)
  // }

   deleteItem = () => {
        let {id} = this.props.favourites
        deleteFavourite(id)
        .then (() => {
            this.props.dispatch(removeFavourite(id))
        })
    }

  clickHandler = () => {
    this.setState({ showMore: !this.state.showMore })
  }

  render () {
    console.log(this.props)

    return (
      <div className='favourites'>
        <table>
          <thead>
            <tr>
              <td><h4>Recipes</h4></td>
            </tr>
          </thead>
          <tbody>
            {this.props.favourites.map((favourite, id) => {
              return (
                <FavouriteListItem key={id} favourite={favourite} removeFavourite={this.deleteItem} recipe={this.props.recipes}/>
              ) 
          })}
          </tbody>
        </table>
        <p className='actions'>
          <button onClick={this.props.viewRecipes}>View more Recipes</button>
        </p>
        <button onClick={this.clickHandler}>Generate A Shopping List</button>
        {this.state.showMore && <ShoppingList ingredients={this.props.ingredients}/>}

        <div>
          
        </div>
      </div>
      

    )
  }
}


const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    favourites: state.favourites,
    ingredients: state.ingredients
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    viewRecipes: () => dispatch({ type: 'CHANGE_PAGE', page: 'recipes' }),
    removeFavourite: (id) => dispatch(removeFavourite(id)),  
    dispatch: action => dispatch(action)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(MyFavourites)
