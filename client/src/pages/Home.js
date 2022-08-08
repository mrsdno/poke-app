import React from 'react'
import '../App.js'
import "./pages.css"

// importing pages
import Login from './Login';
import Signup from './Signup';

import Auth from '../utils/auth';

function Home() {

    const loggedIn = Auth.loggedIn();
  return (
    <div className='home'>
        <div></div>

        <div className="text-center container">

            <h1 className="white-text row-align-item-center">
                Welcome to Pokemon Team Builder!
            </h1>

            <h2 className="black-text row-align-item-center">
                If you have an account with us please sign in! 
                <br></br> 
                If you are new please make an account!
            </h2>

            {loggedIn ? (
                <Login />
            ) : (
                <Signup />
            )}

        <img className="pokemon-hello" 
            src="https://c.tenor.com/rbx3ph5SLRUAAAAi/pikachu-pokemon.gif" 
            alt="Pokemon Hello" />
        </div>

    </div>
  )
}

export default Home;