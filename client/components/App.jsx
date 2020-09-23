import React from 'react'
// import Home from './Home'
import RecipesForm from './RecipesForm'
// import { AddIngredient } from '/'

// const recipes =
//   [
//     { id: 1, name: 'beef stirfry' },
//     { id: 2, name: 'kumara fish cakes' },
//     { id: 3, name: 'chicken fried rice'}, 
//     { id: 4, name: 'beef and pumpkin bake'} 
//   ]

//Viewer can view a list of Recipes
const App = () => {
  return (
    <>
      {/* <h1>Tea Time Recipes</h1>
        <ul>{recipes.map(recipes => <li key={recipes.id}> {recipes.name}</li>)}</ul> */}
        <div>
          {/* <Home /> */}
          <RecipesForm />
        </div>
      </>
  )
}

export default App
