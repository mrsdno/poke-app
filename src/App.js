import React from "react";
import  Header  from './Components/Header'
import  Footer  from './Components/Footer'
import "./App.css"
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import PokemonList from "./pages/PokemonList.js";
import PokemonTeam from "./pages/PokemonTeam.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/pokemonteam" element={<PokemonTeam/>} />
                    <Route path="/pokemonlist" element={<PokemonList/>} />
                </Routes>
            </Router>

            <footer>
                <Footer/>
            </footer>
        </div>

        
    )
}

export default App;