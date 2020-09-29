import React from 'react'
import { connect } from 'react-redux'

import {  getAllIngredients, getFavouriteIds, removeDuplicates, sortIngredients } from './helpers/helpers'

class ShoppingList extends React.Component {

    
    render() {
        const favouriteIds = getFavouriteIds(this.props.favourites)
        
        const sorted = sortIngredients(getAllIngredients(this.props.ingredients, favouriteIds))
        
        const finalList = removeDuplicates(sorted)   
         
        return(
            <>
            <ul>{finalList.map(item => <li key={item.ingredient_name}>{item.ingredient_name} x {item.ingredient_quantity}{item.measurement_name}</li>)}</ul>
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