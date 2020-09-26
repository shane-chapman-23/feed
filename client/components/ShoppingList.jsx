import React from 'react'
import { connect } from 'react-redux'
import { getRecipeIngredients } from './helpers/helpers'

class ShoppingList extends React.Component {
    render() {
        console.log(this.props.ingredients, this.props.favourites[0].id)
        return(
            <>
            <ul>{getRecipeIngredients(this.props.ingredients, this.props.favourites[0].id).map(ingredient => <li key={ingredient.ingredient_name}>{ingredient.ingredient_name} x {ingredient.ingredient_quantity}{ingredient.measurement_name}</li>)}</ul>
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