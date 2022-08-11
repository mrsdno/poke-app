const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        teamCount: Int     
        teams: [Team]   
    }

    type Team {
        _id: ID
        teamName: String
        createdAt: String
        username: String
        pokemon: [Pokemon]
        isFavorite: Boolean
    }

    type Pokemon {
        _id: ID
        teamId: String
        name: String
        height: String
        weight: String
        type: [String]
        image: String
        description: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        myFavTeams: [Team]
        users: [User]
        user(username: String!): User
        teams(username: String): [Team]
        team(_id: ID!): Team
    }

    # grabs Pokemon info for editing the team
    input PokemonInput {
        _id: ID
        teamId: String
        name: String
        height: String
        weight: String
        type: [String]
        image: String
        description: String        
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addTeam(teamName: String!, isFavorite: Boolean): Team
        addPokemon(
            teamId: String!,
            name: String!,
            height: Int!,
            weight: Int!, 
            type: [String]!,
            image: String!, 
            description: String!
            ): Pokemon
        editTeam(
            teamName: String!,
            isFavorite: Boolean,
            pokemon: PokemonInput!
            ): Team
        deleteTeam(
            teamId: String!            
        ): User
    }
`;

module.exports = typeDefs;