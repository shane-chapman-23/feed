import React from 'react'
import { connect } from 'react-redux'
import { fetchAllIngredients, fetchMyRecipes } from '../actions'
import {  getAllIngredients, getMyRecipes } from '../api'
import { getRecipeIds, removeDuplicates } from './helpers/helpers'
import { getRecipeIngredients } from './helpers/helpers'


class MyRecipes extends React.Component {

    componentDidMount() {
        getMyRecipes()
        .then(myRecipes => {
            this.props.dispatch(fetchMyRecipes(myRecipes))
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
       
        
        return(
            <>
            <ul>
            {finalShoppingList.map(ingredient => <li key={ingredient.ingredient_name}>{ingredient.ingredient_quantity} {ingredient.measurement_name} {ingredient.ingredient_name}</li>)}
            </ul>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        allIngredients: state.allIngredients,
        myRecipes: state.myRecipes
       
    }
}

export default connect(mapStateToProps)(MyRecipes)