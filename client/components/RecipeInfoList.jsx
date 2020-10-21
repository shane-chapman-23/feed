import React from 'react'
import { connect } from 'react-redux'
import { addShoppingList, getIngredients, getSteps } from '../api'
import { addToShoppingList, fetchIngredients, fetchSteps } from '../actions'

class RecipeInfoList extends React.Component {

    componentDidMount() {

        getIngredients(this.props.recipe.id)
            .then(ingredients => {
                this.props.dispatch(fetchIngredients(ingredients))
            })
            .then(() => {
                getSteps(this.props.recipe.id)
                    .then(steps => {
                        this.props.dispatch(fetchSteps(steps))
                    })
            })

    }

    clickHandler() {

    }


    render(){
        return(
            <>
            
            <div className='ingredients' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${this.props.recipe.image})` }}> 
            <div className='recipeName'><h2>{this.props.recipe.recipe_name}</h2></div>
            <ul>
            <span className='bold'>Ingredients</span>
            <br></br>
            {this.props.ingredients.map(ingredient => <li role= 'listitem' key={ingredient.ingredient_name}>{ingredient.ingredient_quantity} {ingredient.measurement_name} {ingredient.ingredient_name}</li>)}
            </ul>
            <button onClick={() => this.props.dispatch(addToShoppingList(this.props.recipe.id), addShoppingList(this.props.recipe.id))} >add to shopping list</button>
            </div>
            <div className='steps'>
            <ul>{this.props.steps.map(step => <li role= 'listitem' key={step.step_number}>{step.step_number}. {step.step_desc}</li>)}</ul>  
            </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        ingredients: state.ingredients,
        steps: state.steps,
        shoppingList: state.shoppingList
    }
}

export default connect(mapStateToProps)(RecipeInfoList)