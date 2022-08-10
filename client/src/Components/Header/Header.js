import React from 'react'
import '../components.css'
import '../../App.css'
import pokemonLogo from '../../assets/International_Pokémon_logo.svg.png'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


// Header JSX
const Header = () => {
    // logout function
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className='bg-b'>
            <div className="container-v bg-b">
                <Link to="/">
                    <img alt="Pokemon Logo" className="pokemon-logo bg-b" src={pokemonLogo} />
                </Link>
                <nav className="justify-content-end">
                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/pokemonteam">
                                <button className='btn-1'>My Profile</button>
                            </Link>
                            <a href="/" onClick={logout}>
                                <button className='btn-2'>Logout</button>
                            </a>
                        </>
                    ) : (
                        <>
                            <Link to="/login"><button className="btn-1">Login</button></Link>

                            <Link to="/signup"><button className='btn-1'>Sign-up</button></Link>
                        </>
                    )}
                </nav>
            </div>

            <br></br>
            
        </header>
    );
};

// Export for External
export default Header