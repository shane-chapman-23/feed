import React from 'react'
import {connect} from 'react-redux'
import {getRecipes} from '../api/index'
import {fetchRecipes} from '../actions/index'

// const tempRecipes = [
//   {id: 1, name: 'Fried Rice', URL: "Picture", p_time: '1 day', c_time: "30 mins"},
//   {id: 2, name: 'Carbonara', URL: "Picture", p_time: '10 mins', c_time: "50 mins"}
// ]

class Recipes extends React.Component {
  
  state = {}

  componentDidMount() {
    getRecipes()
      .then(recipes => {
        this.props.dispatch(fetchRecipes(recipes))
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const {recipes} = this.props
    console.log(this.props)
    return(

      <div className='center_text'>
        <h1 className='left_text'>Recipes:</h1>

        {/* {tempRecipes.map(item =>
          <li>
            {item.URL}
            <br></br>{item.name}
            <br></br><br></br>
          </li>
        )} */}
          
        {/* <div className='cards left_text' >
          <p className='card_margins'>{this.props.URL}</p>
          <p className='card_margins dishName'>{tempRecipes[0].name}</p>
          <p className='card_margins'>Prep Time: {tempRecipes[0].p_time}</p>
          <p className='card_margins'>Cooking Time: {tempRecipes[0].c_time}</p>
        </div>
        <br></br><br></br>
        <div className='cards left_text' >
          <p className='card_margins'>{tempRecipes[1].URL}</p>
          <p className='card_margins dishName'>{tempRecipes[1].name}</p>
          <p className='card_margins'>Prep Time: {tempRecipes[1].p_time}</p>
          <p className='card_margins'>Cooking Time: {tempRecipes[1].c_time}</p>
        </div>
        <br></br><br></br> */}

        <p>{recipes.name}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(Recipes)