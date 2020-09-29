import React from 'react'
import { connect } from 'react-redux'
import {  getAllIngredients, getFavouriteIds, removeDuplicates, sortIngredients } from './helpers/helpers'


class ShoppingList extends React.Component {


  printWindow = function () {
    window.print()
  }

  render() {
    const favouriteIds = getFavouriteIds(this.props.favourites)
    const sorted = sortIngredients(getAllIngredients(this.props.ingredients, favouriteIds))
    const finalList = removeDuplicates(sorted)
    return(
      <div>
        <h2>Shopping List:</h2>
        <p>
          {finalList.map(list => <li style={{listStyleType: 'none'}} key={list.ingredient_name}>{list.ingredient_name} {list.ingredient_quantity}{list.measurement_name}</li>)}
        </p>
        <button className="printHidden" onClick={this.printWindow}>Save as Pdf</button>
      </div>
    )
  } 
}

function mapStateToProps(globalState) {
    return {
        ingredients: globalState.ingredients,
        favourites: globalState.favourites
    }
}
export default connect(mapStateToProps)(ShoppingList)