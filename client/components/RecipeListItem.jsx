import React from 'react'
import {connect} from 'react-redux'

function recipeItem ({recipe, dispatch}){
    return (
    <div className="card">
        <img src={recipe.image}></img>
        <h1 className="recipe_name">{recipe.recipe_name}</h1>
        <ul className="card_items">
        <li><b>Prep Time:</b> {recipe.prep_time}</li>
        <li><b>Cook Time:</b> {recipe.cook_time}</li>
        <li><b>Description:</b> {recipe.recipe_description}</li>
        </ul>
        <p className="rating">{recipe.rating}</p>
        <p className="food_category">{recipe.food_category}</p>
        <button className="add">+</button>
    </div>
    )
}

export default connect()(recipeItem)