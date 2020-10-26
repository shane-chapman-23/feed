import React from 'react'
import RecipeList from './RecipeList'
import Header from './Header'
import MyRecipes from './MyRecipes'


class App extends React.Component {
 
  render() {
    return (
      <>
        <MyRecipes />
        <Header />
        <div className='recipes'>
         <RecipeList />
        </div>
      </>
    )
  }
}


export default App
