import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';

import MyShoppingList from './PdfRenderer'

class ShoppingList extends React.Component {
  render() {
    return(
      <div>
        <h2>Shopping List:</h2>
        <div width='100%'>
          <PDFViewer>
            <MyShoppingList />
          </PDFViewer>
        </div>
      </div>
    )
  }
}

export default ShoppingList