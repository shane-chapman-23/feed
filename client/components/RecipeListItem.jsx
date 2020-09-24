import React from 'react'
import {connect} from 'react-redux'
import {addToFavourites} from '../actions'

function recipeItem ({recipe, dispatch}){
    return (
    <>
        <img style={{backgroundImage: `url(${recipe.image})`}}></img>
        <h1 className="recipe_name">{recipe.recipe_name}</h1>
        <ul className="card_items">
        <li><b>Prep Time:</b> {recipe.prep_time}</li>
        <li><b>Cook Time:</b> {recipe.cook_time}</li>
        <li><b>Description:</b> {recipe.recipe_description}</li>
        </ul>
        <p className="rating">{recipe.rating}</p>
        <p className="food_category">{recipe.food_category}</p>
        <button className="add">+</button>
        <button className="favourite-link" onClick={() => dispatch(addToFavourites(recipe.id, recipe.recipe_name), alert('added to favourites'))}>Add to Favourites</button>
    </>
    )
}

export default connect()(recipeItem)