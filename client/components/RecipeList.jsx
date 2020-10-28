import React from 'react'
import { connect } from 'react-redux'
import { fetchMyRecipes, fetchRecipes } from '../actions'
import { getMyRecipes, getRecipes } from '../api'
import RecipeListItem from './RecipeListItem'


class RecipeList extends React.Component {
    componentDidMount() {
        getRecipes()
            .then(recipes => {
                this.props.dispatch(fetchRecipes(recipes))
            })
            .then(() => {
                getMyRecipes()
                    .then(myRecipes => {
                        this.props.dispatch(fetchMyRecipes(myRecipes))
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
            <div className='recipeList'>
            <ul>{this.props.recipes.map(recipe => <li role= 'listitem' key={recipe.id}><RecipeListItem myRecipes={this.props.myRecipes} recipe={recipe}/></li>)}</ul>
            </div>
            </>
            
        )
    }
}

    function mapStateToProps(state) {
        return {
            recipes: state.recipes,
            myRecipes: state.myRecipes
        }
    }


export default connect(mapStateToProps)(RecipeList)