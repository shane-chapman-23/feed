import React from 'react'
import { connect } from 'react-redux'
import { fetchIngredients, fetchSteps, addToFavourites } from '../actions'
import { getIngredients, getSteps } from '../api'
import IngredientsList from './IngredientsList'
import StepsList from './StepsList'

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
        const { recipe, dispatch } = this.props
        return (
            <>
                <img style={{ backgroundImage: `url(${recipe.image})` }}></img>
                <h1 className="recipe_name">{recipe.recipe_name}</h1>
                <ul className="card_items">
                    <li><b>Prep Time:</b> {recipe.prep_time}</li>
                    <li><b>Cook Time:</b> {recipe.cook_time}</li>
                    <li><b>Description:</b> {recipe.recipe_description}</li>
                </ul>
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

                {this.state.showMore && <div className="hide"></div>}
                {this.state.showMore &&
                    <div className="recipe-content">
                        <button className="show_less" onClick={this.clickHandler}>Show less</button>
                        <button className="favourite-link" onClick={() => dispatch(addToFavourites(recipe), alert('added to favourites'))}>Add to Favourites</button>
                        <IngredientsList id={recipe.id} />
                        <StepsList id={recipe.id} />                     
                    </div>}
            </>
        )
    }
}

export default connect()(recipeItem)