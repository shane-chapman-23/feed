import React from 'react'
import { connect } from 'react-redux'
import { getIngredients, getSteps } from '../api'
import { fetchIngredients, fetchSteps } from '../actions'
import RecipeInfoList from './RecipeInfoList'



class RecipeListItem extends React.Component {

    state = {
        showMore: false
    }



 clickHandler = () => {
     this.setState({ showMore: !this.state.showMore })
     
}
    render(){
        
        
        return(
            <>
                
                {this.state.showMore ? 
                <>
                <div className='cardBackground' onClick={this.clickHandler}></div>
                <div className='recipeCardGhost'></div>
                <div className='recipeCardBack'>
                    <RecipeInfoList recipe={this.props.recipe}/>
                    <button onClick={this.clickHandler}>+</button>
                </div>
                </> 
                
                : 
                
                <div className='recipeCardFront'>
                    <img style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.props.recipe.image})` }}></img>
                    <h2>{this.props.recipe.recipe_name}</h2>
                    <p id='description'>
                        {this.props.recipe.recipe_description}
                    </p>
                    <p id="times">
                        prep: {this.props.recipe.prep_time}
                        <br></br>
                        cook: {this.props.recipe.cook_time}
                    </p>
                    <button onClick={this.clickHandler}>+</button>
                </div>}
            </>
        )
    }
}

function mapStateToProps (state) {
    return {
        ingredients: state.ingredients,
        steps: state.steps
    }
}

export default connect(mapStateToProps)(RecipeListItem)