import React from 'react'
import { connect } from 'react-redux'

class ShoppingList extends React.Component {
    render() {
        console.log(this.props)
        return(
            <>
            <ul>{this.props.ingredients.map(ingredient => <li>{ingredient.ingredient_name} x {ingredient.ingredient_quantity}{ingredient.measurement_name}</li>)}</ul>
            </>
        )
    }
}
function mapStateToProps(globalState) {
    return {
        ingredients: globalState.ingredients,
    }
}
export default connect(mapStateToProps)(ShoppingList)