import React from 'react'
import '../components.css'
import '../../App.css'
import pokemonLogo from '../../assets/International_Pokémon_logo.svg.png'

import Auth from '../../utils/auth';

function Header() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };


  return (
    <header className='bg-b'>
        <div className="container-v bg-b">
            <div>
                <img alt="Pokemon Logo" className="pokemon-logo bg-b" src={pokemonLogo} />
            </div>
            <div className='text-shadow'>
                <button className='btn-1 marg-5' type="button">
                    Login
                </button>
                <button className='btn-2 marg-5' type="button" onClick={logout}>
                    Log Out
                </button>
            </div>
            
        </div>
        <br></br>
    </header>
    

  )
}

export default Header