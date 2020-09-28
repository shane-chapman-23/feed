import React from 'react'
import { connect } from 'react-redux'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'bisque',
    width: '100%',
    margin: 'auto'
  },
  section: {
    color: 'black',
    margin: 10,
    padding: 10,
    flexGrow: 10
  }
});

const IandQ = [
  {id: 1, ingredient: 'banana', quantity: '1'},
  {id: 2, ingredient: 'Apple', quantity: '2'}
]

// Create Document Component
const MyShoppingList = () => (
  
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Recipes:</Text>
        {IandQ.map(list => <Text key={list.id}>Ingredient: {list.ingredient}, Quantity: {list.quantity}</Text>)}
      </View>
    </Page>
  </Document>
);

export default MyShoppingList