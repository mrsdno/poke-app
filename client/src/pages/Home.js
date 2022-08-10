import React from 'react'
import '../App.js'
import "./pages.css"
import { Link } from 'react-router-dom';

// importing pages
import Login from './Login';
import Signup from './Signup';
import AllTeams from '../Components/AllTeams';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_TEAMS } from "../utils/queries";

function Home() {

    const { loading, data} = useQuery(QUERY_TEAMS);
    const teams = data?.teams || [];

    const loggedIn = Auth.loggedIn();
  return (
    <div className='home'>
        <div></div>

        <div className="text-center container">

            <h1 className="white-text row-align-item-center pokemon-heading">
                Welcome to Pokemon Team Builder!
            </h1>

            <h2 className="black-text row-align-item-center pokemon-heading2">
                If you have an account with us please sign in! 
                <br></br> 
                If you are new please make an account!
            </h2>

            {loggedIn ? (
                // <Login />
                <Link to="/pokemonteam">
                    <button className='btn-3'>My Teams</button>
                </Link>
            ) : (
                <><Login />
                <p>or..</p>
                <Signup /></>
            )}

            {loading ? (
                <div>Loading...</div>
            ) : (
                <AllTeams
                    teams={teams}
                    title="Gotta catch 'em all!"
                    />
            )}

        <img className="pokemon-hello" 
            src="https://c.tenor.com/rbx3ph5SLRUAAAAi/pikachu-pokemon.gif" 
            alt="Pokemon Hello" />
        </div>

    </div>
  )
}

export default Home;