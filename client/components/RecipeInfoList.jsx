import React from 'react'
import { connect } from 'react-redux'


import { addMyRecipes, getIngredients, getMyRecipes, getSteps, removeMyRecipes } from '../api'
import { addToMyRecipes, fetchIngredients, fetchMyRecipes, fetchSteps, removeRecipe } from '../actions'
import { recipeExists, getRecipeIds } from './helpers/helpers'

class RecipeInfoList extends React.Component {

    state = {
        added: recipeExists(getRecipeIds(this.props.myRecipes), this.props.recipe.id)
    }

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
            .then(() => {
                getMyRecipes()
                    .then(myRecipes => {
                        this.props.dispatch(fetchMyRecipes(myRecipes))
                    })
            })
    }

    

    
    

    clickHandler() {
        this.setState({added: !this.state.added})

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
            {this.state.added? 
            <button onClick={() => {this.clickHandler(), this.props.dispatch(removeRecipe(this.props.recipe.id), removeMyRecipes(this.props.recipe.id))}} >remove from my recipes</button> :
            <button onClick={() => {this.clickHandler(), this.props.dispatch(addToMyRecipes(this.props.recipe.id), addMyRecipes(this.props.recipe.id))}} >add to my recipes</button>
            }
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
        myRecipes: state.myRecipes
        
    }
}

export default connect(mapStateToProps)(RecipeInfoList)