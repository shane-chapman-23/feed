import React from 'react'
import { connect } from 'react-redux'
import { fetchAllIngredients, fetchShoppingList } from '../actions'
import {  getAllIngredients, getShoppingList } from '../api'
import { getRecipeIds, removeDuplicates } from './helpers/helpers'
import { getRecipeIngredients } from './helpers/helpers'


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
        const finalList = removeDuplicates(shoppingList)
        console.log(finalList)
        
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