import React from 'react'

class Form extends React.Component {
  
  state = {
    recipe_name: "",
    recipe_description: "",
    image: "",
    prep_time: "",
    cook_time: "",
    food_category: "",
    ingredients: [],
    quantity: [],
    measurements: []
  }

  handleChange(event) {
    this.setState({
      recipe_name: event.target.value,
      recipe_description: event.target.value,
      image: event.target.value,
      prep_time: event.target.value,
      cook_time: event.target.value,
      food_category: event.target.value,
      ingredients: event.target.value,
      quantity: event.target.value,
      measurements: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    alert('Submitted: ' + this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.recipe_name} onChange={this.handleChange} placeholder="recipe Name"></input>
          <input type="text" value={this.state.recipe_description} onChange={this.handleChange} placeholder="recipe description"></input>
          <input type="text" value={this.state.image} onChange={this.handleChange} placeholder="image url"></input>
          <input type="text" value={this.state.prep_time} onChange={this.handleChange} placeholder="prep time"></input>
          <input type="text" value={this.state.cook_time} onChange={this.handleChange} placeholder="cook time"></input>
          <input type="text" value={this.state.food_category} onChange={this.handleChange} placeholder="food category"></input>
          <input type="text" value={this.state.ingredients} onChange={this.handleChange} placeholder="ingredients"></input>
          <input type="text" value={this.state.quantity} onChange={this.handleChange} placeholder="quantity"></input>
          <input type="text" value={this.state.measurements} onChange={this.handleChange} placeholder="measurements"></input>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default Form