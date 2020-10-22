import React from 'react'
import { connect } from 'react-redux'
import { fetchAllIngredients, fetchShoppingList } from '../actions'
import {  getAllIngredients, getShoppingList } from '../api'
import { getRecipeIds } from './helpers/shoppingListHelpers'
import { getRecipeIngredients } from './helpers/shoppingListHelpers'


class ShoppingList extends React.Component {

    componentDidMount() {
        getShoppingList()
        .then(shoppingList => {
            this.props.dispatch(fetchShoppingList(shoppingList))
        })
        .then(() => {
            getAllIngredients()
                .then(allIngredients => {
                    this.props.dispatch(fetchAllIngredients(allIngredients))
                })
        })
    }
    render(){

        const recipeIds = getRecipeIds(this.props.shoppingList)
        const shoppingList = getRecipeIngredients(recipeIds, this.props.allIngredients)
        console.log(shoppingList)
        
        return(
            <>
            Hi
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        allIngredients: state.allIngredients,
        shoppingList: state.shoppingList
       
    }
}

export default connect(mapStateToProps)(ShoppingList)