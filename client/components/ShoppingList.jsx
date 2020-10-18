import React from 'react'
import { connect } from 'react-redux'
import { fetchShoppingList } from '../actions'
import { getShoppingList } from '../api'


class ShoppingList extends React.Component {

    componentDidMount() {
        getShoppingList()
        .then(shoppingList => {
            this.props.dispatch(fetchShoppingList(shoppingList))
        })
    }
    render(){
        
        console.log(this.props.shoppingList)
        return(
            <>
            Hi
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        ingredients: state.ingredients,
        shoppingList: state.shoppingList
       
    }
}

export default connect(mapStateToProps)(ShoppingList)