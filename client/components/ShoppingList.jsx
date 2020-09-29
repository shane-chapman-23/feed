import React from 'react'
import { connect } from 'react-redux'

import {  getAllIngredients, getFavouriteIds, removeDuplicates, sortIngredients } from './helpers/helpers'

class ShoppingList extends React.Component {

    
    render() {
        const favouriteIds = getFavouriteIds(this.props.favourites)
        
        const sorted = sortIngredients(getAllIngredients(this.props.ingredients, favouriteIds))
        
        console.log(sorted)   
         
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