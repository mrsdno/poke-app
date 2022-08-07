import React from 'react'
import '../components.css'
import '../../App.css'
import pokemonLogo from '../../assets/International_Pokémon_logo.svg.png'

function Header() {
  return (
    <header className='bg-b'>
        <div className="container-v bg-b">
            <div>
                <img alt="Pokemon Logo" className="pokemon-logo bg-b" src={pokemonLogo} />
            </div>
            <div>
                <button className='btn-1 marg-5' type="button">
                    Login
                </button>
                <button className='btn-2 marg-5' type="button">
                    Log Out
                </button>
            </div>
            
        </div>
        

        <div>
            <h1>
                Pokemon Team Builder
            </h1>
        </div>
    </header>
    

  )
}

export default Header