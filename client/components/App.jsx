import React from 'react'
import RecipeList from './RecipeList'
import Header from './Header'
import ShoppingList from './ShoppingList'


class App extends React.Component {
 
  render() {
    return (
      <>
        <ShoppingList />
        <Header />
        <div className='recipes'>
         <RecipeList />
        </div>
      </>
    )
  }
}


export default App
