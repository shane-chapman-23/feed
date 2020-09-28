import React from 'react'
import { connect } from 'react-redux'
import {  getAllIngredients, getFavouriteIds, getRecipeIngredients } from './helpers/helpers'

class ShoppingList extends React.Component {
    render() {
        const favouriteIds = getFavouriteIds(this.props.favourites)
        
        
        console.log(getAllIngredients(this.props.ingredients, favouriteIds))   
         
        return(
            <>
            </>
        )
    }
}
function mapStateToProps(globalState) {
    return {
        ingredients: globalState.ingredients,
        favourites: globalState.favourites
    }
}
export default connect(mapStateToProps)(ShoppingList)