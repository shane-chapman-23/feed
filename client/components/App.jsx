import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import RecipeList from './RecipeList'

class App extends React.Component {
  render() {
    return (
      <>
        <div className='App'>
          <Header />
          <main>
            {/* <Home /> */}
            <RecipeList />
          </main>
          <Footer />
        </div>
      </>
    )
  }
}

export default App
