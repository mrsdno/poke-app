import React from "react";

import "./App.css"

import  Header from "./Components/Header"
import  Footer  from './Components/Footer'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import PokemonList from "./pages/PokemonList";
import PokemonTeam from "./pages/PokemonTeam";
import ErrorPage from "./pages/ErrorPage";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

function App() {

    return (
        <div>
            <header>
                <Header/>
            </header>
            <ApolloProvider client={client}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path="/pokemonteam" element={<PokemonTeam/>} />
                        <Route path="/pokemonlist" element={<PokemonList/>} />
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </Router>
            </ApolloProvider>

            <footer>
                <Footer/>
            </footer>
        </div>

        
    )
}


export default App;