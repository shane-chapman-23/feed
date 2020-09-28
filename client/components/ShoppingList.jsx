import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';

import MyShoppingList from './PdfRenderer'

class ShoppingList extends React.Component {

  printWindow = function () {
    window.print()
  }

  IandQ = [
    {id: 1, ingredient: 'banana', quantity: '1'},
    {id: 2, ingredient: 'Apple', quantity: '2'},
    {id: 3, ingredient: 'banana', quantity: '1'},
    {id: 4, ingredient: 'Apple', quantity: '2'},
    {id: 5, ingredient: 'banana', quantity: '1'},
    {id: 6, ingredient: 'Apple', quantity: '2'},
    {id: 7, ingredient: 'Apple', quantity: '2'},
    {id: 8, ingredient: 'banana', quantity: '1'},
    {id: 9, ingredient: 'Apple', quantity: '2'},
    {id: 10, ingredient: 'banana', quantity: '1'},
    {id: 11, ingredient: 'Apple', quantity: '2'},
    {id: 12, ingredient: 'banana', quantity: '1'},
    {id: 13, ingredient: 'Apple', quantity: '2'},
    {id: 14, ingredient: 'banana', quantity: '1'},
    {id: 15, ingredient: 'Apple', quantity: '2'},
    {id: 16, ingredient: 'banana', quantity: '1'},
    {id: 17, ingredient: 'Apple', quantity: '2'},
    {id: 18, ingredient: 'banana', quantity: '1'},
    {id: 19, ingredient: 'Apple', quantity: '2'},
    {id: 20, ingredient: 'banana', quantity: '1'},
    {id: 21, ingredient: 'Apple', quantity: '2'},
    {id: 22, ingredient: 'banana', quantity: '1'},
    {id: 23, ingredient: 'Apple', quantity: '2'},
    {id: 24, ingredient: 'banana', quantity: '1'},
    {id: 25, ingredient: 'Apple', quantity: '2'},
    {id: 26, ingredient: 'banana', quantity: '1'},
    {id: 27, ingredient: 'Apple', quantity: '2'},
    {id: 28, ingredient: 'banana', quantity: '1'},
    {id: 29, ingredient: 'Apple', quantity: '2'},
    {id: 30, ingredient: 'banana', quantity: '1'},
    {id: 31, ingredient: 'Apple', quantity: '2'},
    {id: 32, ingredient: 'banana', quantity: '1'},
    {id: 33, ingredient: 'Apple', quantity: '2'},
  ]

  render() {
    return(
      <div>
        <h2>Shopping List:</h2>

        <p>
        {this.IandQ.map(list => <li style={{textDecoration: 'none'}} key={list.id}>Ingredient: {list.ingredient}, Quantity: {list.quantity}</li>)}
        </p>
        {/* <div width='100%'>
          <PDFViewer>
            <MyShoppingList />
          </PDFViewer>
        </div> */}
        <button className="printHidden" onClick={this.printWindow}> Print </button>
      </div>
    )
  }
}

export default ShoppingList