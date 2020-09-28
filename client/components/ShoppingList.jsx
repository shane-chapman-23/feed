import React from 'react'
import { connect } from 'react-redux'
import { PDFViewer } from '@react-pdf/renderer';
import {  getAllIngredients, getFavouriteIds, sortIngredients } from './helpers/helpers'

import MyShoppingList from './PdfRenderer'

class ShoppingList extends React.Component {

  printWindow = function () {
    window.print()
  }

  render() {
    return(
      <div>
        <h2>Shopping List:</h2>

        <p>
        {this.IandQ.map(list => <li style={{listStyleType: 'none'}}></li>)}
        </p>
        {/* <div width='100%'>
          <PDFViewer>
            <MyShoppingList />
          </PDFViewer>
        </div> */}
        <button className="printHidden" onClick={this.printWindow}>Save as Pdf</button>
      </div>
    )
  }
}

class ShoppingList extends React.Component {
    render() {
        const favouriteIds = getFavouriteIds(this.props.favourites)
        
        const sorted = sortIngredients(getAllIngredients(this.props.ingredients, favouriteIds))
        
        console.log(this.props)   
         
        return(
            <>
            </>
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
