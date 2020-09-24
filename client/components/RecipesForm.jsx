import React from 'react'
import {connect} from 'react-redux'

class RecipesForm extends React.Component {

  state = {
    recipe_name: "",
    recipe_description: "",
    image: "",
    prep_time: "",
    cook_time: "",
    food_category: "",
    // ingredient_quantities: []
  }

  // addIngredient = (ingredientId, quantity, measurementId) => {
  // }

  handleChange = (event) => {
    this.setState({
      recipe_name: event.target.recipe_name,
      recipe_description: event.target.recipe_description,
      image: event.target.image,
      prep_time: event.target.prep_time,
      cook_time: event.target.cook_time,
      food_category: event.target.food_category
    })
  }

  handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault()
    alert('Submitted: ' + this.state);
  }

  render() {
    return(
      <div className="center_text">
          <input name='recipe_name' value={this.state.recipe_name} onChange={this.handleChange} placeholder="Recipe name"></input>
          <br></br><input name='recipe_description' value={this.state.recipe_description} onChange={this.handleChange} placeholder="Recipe description"></input>
          <br></br><input name="image" value={this.state.image} onChange={this.handleChange} placeholder="Image url"></input>
          <br></br><input name="prep_time" value={this.state.prep_time} onChange={this.handleChange} placeholder="Prep time"></input>
          <br></br><input name="cook_time" value={this.state.cook_time} onChange={this.handleChange} placeholder="Cook time"></input>
          <br></br><input name="food_category" value={this.state.food_category} onChange={this.handleChange} placeholder="Food category"></input>
          {/* <IngredientsForm /> */}
          <br></br><button onClick={this.handleSubmit}>Add Recipe</button>
      </div>
    )
  }
}

export default connect()(RecipesForm)