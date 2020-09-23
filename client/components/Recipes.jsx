import React from 'react'

const tempRecipes = [
  {id: 1, name: 'Fried Rice', URL: "Insert Url", info: "Great dish"},
  {id: 2, name: 'Carbonara', URL: "Insert Url", info: "Easy to make"}
]

class Recipes extends React.Component {
  
  
  render() {
    return(

      <div className='centerText'>
        <h1>Recipes:</h1>
          {/* {tempRecipes.map(item =>
            <li style={{listStyle: 'none', paddingLeft: 0}} key={item.id}>
              {item.URL}<br></br>
              {item.name}
              <span><br></br><br></br></span>
            </li>
          )} */}
          
        <div className='cards' >
          <p>{tempRecipes[0].URL}</p>
          <p>{tempRecipes[0].name}</p>
          <p>{tempRecipes[0].info}</p>
          <a href="#">Add to Recipe List</a>
        </div>
        <br></br><br></br>
        <div className='cards' >
          <p>{tempRecipes[1].URL}</p>
          <p>{tempRecipes[1].name}</p>
          <p>{tempRecipes[1].info}</p>
          <a href="#">Add to Recipe List</a>
        </div>
        <br></br><br></br>
      </div>
    )
  }
}

export default Recipes