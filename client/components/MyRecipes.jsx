import React from 'react'
import { connect } from 'react-redux'

import { fetchAllIngredients, fetchMyRecipes, fetchRecipes } from '../actions'
import {  getAllIngredients, getMyRecipes, getRecipes } from '../api'
import { getRecipeIds, removeDuplicates, getRecipesById, getRecipeIngredients } from './helpers/helpers'
import RecipeListItem from './RecipeListItem'


class MyRecipes extends React.Component {

    componentDidMount() {
        getMyRecipes()
        .then(myRecipes => {
            this.props.dispatch(fetchMyRecipes(myRecipes))
        })
        .then(() => {
            getRecipes()
                .then(recipes => {
                    this.props.dispatch(fetchRecipes(recipes))
                })
        })
        .then(() => {
            getAllIngredients()
                .then(allIngredients => {
                    this.props.dispatch(fetchAllIngredients(allIngredients))
                })
        })
    }
    render(){

        const recipeIds = getRecipeIds(this.props.myRecipes)
        const shoppingList = getRecipeIngredients(recipeIds, this.props.allIngredients)
        const finalShoppingList = removeDuplicates(shoppingList)
        const myRecipesList = getRecipesById(this.props.myRecipes, this.props.recipes)
        
        
       
        
        return(
            <>
            <div className='recipeList'>
            <ul>
                {myRecipesList.map(recipe => <li role="listitem" key={recipe.id}><RecipeListItem myRecipes={this.props.myRecipes} recipe={recipe}/></li>)}
            </ul>
            </div>
            <ul>
            {/* {finalShoppingList.map(ingredient => <li key={ingredient.ingredient_name}>{ingredient.ingredient_quantity} {ingredient.measurement_name} {ingredient.ingredient_name}</li>)} */}
            </ul>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        allIngredients: state.allIngredients,
        myRecipes: state.myRecipes,
        recipes: state.recipes
       
    }
}

export default connect(mapStateToProps)(MyRecipes)