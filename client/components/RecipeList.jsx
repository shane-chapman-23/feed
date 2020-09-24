import React from 'react'
import {connect} from 'react-redux'
import {fetchRecipes} from '../actions'
import {getRecipes} from '../api'

import RecipeListItem from './RecipeListItem'

class RecipeList extends React.Component {
  componentDidMount() {
    getRecipes()
      .then(recipes => {
        this.props.dispatch(fetchRecipes(recipes))
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    // optional chaining operator (if true then keep going)
    console.log(this.props.recipes[0]?.recipe_name)
    return(
      <div className="recipe_list">

          {this.props.recipes.map(recipe => <div key={recipe.id}><RecipeListItem recipe={recipe}/></div>)}

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeList)
       