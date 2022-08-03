import React from "react";
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/teambuilder">Team Builder</Link></li>
        <li><Link to="/pokemonlist">Pokemon List</Link></li>
    </ul>
  )
}

export default NavBar