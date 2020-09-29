import React from 'react'
import { connect } from 'react-redux'
import { fetchIngredients, fetchSteps, addToFavourites } from '../actions'
import { getIngredients, getSteps, addFavourite } from '../api'
import IngredientsList from './IngredientsList'
import StepsList from './StepsList'
import {FaTimesCircle} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'

class recipeItem extends React.Component {

    state = {
        showMore: false
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

    }

    clickHandler = () => {
        this.setState({ showMore: !this.state.showMore })
    }

    render() {
        const deleteStyle = {color: 'red', cursor: 'pointer', position: 'fixed', display: 'absolute', top: '7%', left: '80%', height: '25px', width: '25px'}
        const favouriteStyle = {color: 'DeepPink', float: 'right', height: '25px', width: '25px', padding: '5px', marginLeft: '10px'}
        const { recipe, dispatch } = this.props
        const user = {id: 1}
        return (
            <>
                <img style={{ backgroundImage: `url(${recipe.image})` }}></img>
                <h1 className="recipe_name">{recipe.recipe_name}</h1>
                <div className="knifeAndFork">
                    <ul>
                        <li><b>Prep Time:</b> {recipe.prep_time}</li>
                        <li><b>Cook Time:</b> {recipe.cook_time}</li>
                        <li><b>Description:</b> {recipe.recipe_description}</li>
                    </ul>
                </div>
                <p className="rating">
                    <span className="fa fa-star checkedStar"></span>
                    <span className="fa fa-star checkedStar"></span>
                    <span className="fa fa-star checkedStar"></span>
                    <span className="fa fa-star checkedStar"></span>
                    <span className="fa fa-star checkedStar"></span>
                ({recipe.rating})
                </p>
                <p className="food_category">{recipe.food_category}</p>
                <button className="show_more" onClick={this.clickHandler}>Show more</button>

                {this.state.showMore && <div className="hide" onClick={this.clickHandler}></div>}
                {this.state.showMore &&
                    <div className="recipe-content">
                        <FaTimesCircle style={deleteStyle} role='button' onClick={this.clickHandler}/>
                        <img style={{ backgroundImage: `url(${recipe.image})` }}></img>
                        <h1 className="recipe_name">{recipe.recipe_name}</h1>
                        <button className="favourites" onClick={() => dispatch(addToFavourites(recipe), addFavourite(user.id, recipe.id), alert('added to favourites'))}>
                            Add to favourites
                            <FaHeart style={favouriteStyle}/>
                        </button>
                        <IngredientsList id={recipe.id} />
                        <StepsList id={recipe.id} />                     
                </div>}
            </>
        )
    }
}

export default connect()(recipeItem)