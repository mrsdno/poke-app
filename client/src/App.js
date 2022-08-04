import React from "react";

import "./App.css"

import  Header  from './components/Header'
import  Footer  from './components/Footer'

import Home from "./pages/Home";
import Login from "./pages/Login";
import PokemonList from "./pages/PokemonList";
import PokemonTeam from "./pages/PokemonTeam";

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