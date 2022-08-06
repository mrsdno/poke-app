import React from "react";

import "./App.css"

import  Header  from './Components/Header'
import  Footer  from './Components/Footer'

import Home from "./pages/Home";
import Login from "./pages/Login";
import PokemonList from "./pages/PokemonList";
import PokemonTeam from "./pages/PokemonTeam";
import ErrorPage from "./pages/ErrorPage";

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
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </Router>

            <footer>
                <Footer/>
            </footer>
        </div>

        
    )
}


export default App;