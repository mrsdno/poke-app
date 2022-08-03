import React from 'react'
import '../../../src/App.js'
import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"

function Home() {
  return (
    <div>
        <Header/>
        <div>home</div>

        <div className="text-center container">

            <h1 className="white-text row-align-item-center">
                Welcome to our Pokemon Team Build Site!
            </h1>

            <h2 className="black-text row-align-item-center">
                If you have an account with us please sign in! If you are new please make an account!
            </h2>

        <img className="pokemon-hello" 
            src="https://c.tenor.com/rbx3ph5SLRUAAAAi/pikachu-pokemon.gif" 
            alt="Pokemon Hello" />
        </div>

    </div>
  )
}

export default Home;