import React from 'react'
import RecipeList from './RecipeList'
import Header from './Header'

class App extends React.Component {
 
  render() {
    return (
      <>
        <Header />
        <div className='recipes'>
         <RecipeList />
        </div>
      </>
    )
  }
}


export default App
