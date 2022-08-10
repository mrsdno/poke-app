import React from "react";
import "./App.css"


import  Header  from './Components/Header/Header'
import  Footer  from './Components/Footer/Footer'


import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import PokemonList from "./pages/PokemonList/PokemonList";
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
            <ApolloProvider client={client}>
                <Router>
                    <header>
                        <Header />
                    </header>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path="/pokemonteam" forceRefresh={true} element={<PokemonTeam />} />
                        <Route path="/pokemonlist" element={<PokemonList />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                    <footer>
                        <Footer />
                    </footer>
                </Router>
            </ApolloProvider>
        </div>
    );
}


export default App;