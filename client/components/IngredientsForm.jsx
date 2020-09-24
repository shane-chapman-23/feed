import React from 'react'

class IngredientsForm extends React.Component {

  state = {
    ingredients: [],
    quantity: [],
    measurements: []
  }

  handleChange = (event) => {
    this.setState({
      ingredients: event.target.ingredients,
      quantity: event.target.quantity,
      measurements: event.target.measurements
    })
  }

  render() {
    return(
      <>
      {/* Drop down menu */}
        <br></br><input type="text" value={this.state.ingredients} onChange={this.handleChange} placeholder="Ingredients"></input>
        <br></br><input type="text" value={this.state.quantity} onChange={this.handleChange} placeholder="Quantity"></input>
        <br></br><input type="text" value={this.state.measurements} onChange={this.handleChange} placeholder="Measurements"></input>
      </>
    )
  }
}

export default IngredientsForm