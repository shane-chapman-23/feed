import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';

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

export default ShoppingList