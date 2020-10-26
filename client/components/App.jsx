import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import RecipeList from './RecipeList'
import Header from './Header'
import MyRecipes from './MyRecipes'
import NavBar from './NavBar'


class App extends React.Component {
 
  render() {
    return (
      <Router>
      <>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Header} />
        <div className='recipes'>
        <Route exact path='/' component={RecipeList} />
        </div>
        <Route exact path='/myrecipes' component={MyRecipes} />
      </>
      </Router>
    )
  }
}


export default App
