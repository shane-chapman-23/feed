import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return(
            <>
            <Link to='/myrecipes'>My Recipes</Link>
            </>
        )
    }
}

export default NavBar