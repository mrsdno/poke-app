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
                            <button className="m-2"><Link to="/login">Login</Link></button>

                            <Link to="/signup" className="m-2"><button>Sign-up</button></Link>
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