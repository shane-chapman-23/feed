import React from 'react'
import {connect} from 'react-redux'

function recipeItem ({recipe, dispatch}){
    return (
    <div className="card">
        <p className="name">{recipe.recipe_name}</p>
        <p className="word">{recipe.prep_time}</p>
        <p className="word">{recipe.cook_time}</p>
        <p className="description">{recipe.recipe_description}</p>
        <p className="rating">{recipe.rating}</p>
        <p className="food_category">{recipe.food_category}</p>
        <button className="add">+</button>
    </div>
    )
}

export default connect()(recipeItem)