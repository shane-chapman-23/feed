import React from 'react'
import { connect } from 'react-redux'
// import jsPDF from "jspdf";
import {  getAllIngredients, getFavouriteIds, removeDuplicates, sortIngredients } from './helpers/helpers'

class ShoppingList extends React.Component {

  // generatePDF = () => {
  //   const doc = new jsPDF()
  //   doc.text(document.getElementById('pdf'), 10, 10)
  //   doc.save('div.pdf')
  // }
  

  render() {
    const favouriteIds = getFavouriteIds(this.props.favourites)
    const sorted = sortIngredients(getAllIngredients(this.props.ingredients, favouriteIds))
    const finalList = removeDuplicates(sorted)
    return(
      <div id="pdf" className="printSpacing">
        <h2>Shopping List:</h2>
        <p>
          {finalList.map(list => <li style={{listStyleType: 'none'}} key={list.ingredient_name}>{list.ingredient_name} {list.ingredient_quantity}{list.measurement_name}</li>)}
        </p>
        {/* <button className="printHidden" onClick={this.generatePDF()}>Save as Pdf</button> */}
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
