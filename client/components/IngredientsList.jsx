import React from 'react'
import { connect } from 'react-redux'


class IngredientsList extends React.Component {
    
    render() {
        console.log(this.props.ingredients)
        
    return(
        <>
        <ul>{this.props.ingredients.map(ingredient => <li key={ingredient[0]}>{ingredient.ingredient_name} x {ingredient.ingredient_quantity}{ingredient.measurement_name}</li>)}</ul>
        </>
    )
    }
    
}

function mapStateToProps(globalState) {
    return {
        ingredients: globalState.ingredients.ingredients
    }
}

export default connect(mapStateToProps)(IngredientsList)