import React from 'react'

const tempRecipes = [
  {id: 1, name: 'Fried Rice', URL: "Picture", p_time: '1 day', c_time: "30 mins"},
  {id: 2, name: 'Carbonara', URL: "Picture", p_time: '10 mins', c_time: "50 mins"}
]

class Recipes extends React.Component {
  
  
  render() {
    return(

      <div className='center_text'>
        <h1 className='left_text'>Recipes:</h1>
          {/* {tempRecipes.map(item =>
            <li style={{listStyle: 'none', paddingLeft: 0}} key={item.id}>
              {item.URL}<br></br>
              {item.name}
              <span><br></br><br></br></span>
            </li>
          )} */}
          
        <div className='cards left_text' >
          <p className='card_margins'>{tempRecipes[0].URL}</p>
          <p className='card_margins dishName'>{tempRecipes[0].name}</p>
          <p className='card_margins'>Prep Time: {tempRecipes[0].p_time}</p>
          <p className='card_margins'>Cooking Time: {tempRecipes[0].c_time}</p>
        </div>
        <br></br><br></br>
        <div className='cards left_text' >
          <p className='card_margins'>{tempRecipes[1].URL}</p>
          <p className='card_margins dishName'>{tempRecipes[1].name}</p>
          <p className='card_margins'>Prep Time: {tempRecipes[1].p_time}</p>
          <p className='card_margins'>Cooking Time: {tempRecipes[1].c_time}</p>
        </div>
        <br></br><br></br>
      </div>
    )
  }
}

export default Recipes