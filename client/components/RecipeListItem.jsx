import React from 'react'
import {connect} from 'react-redux'

function recipeItem ({recipes, dispatch}){
    <div className="card">
        <p className="name">{recipes.recipe_name}</p>
        <p className="word">{recipes.prep_time}</p>
        <p className="word">{recipes.cook_time}</p>
        <p className="description">{recipes.recipe_description}</p>
        <p className="rating">{recipes.rating}</p>
        <p className="food_category">{recipes.food_category}</p>
        <button className="add">+</button>
    </div>
}

export default connect()(recipeItem)