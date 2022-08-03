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

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addTeam(teamName: String!, isFavorite: Boolean!): Team
        addPokemon(
            teamId: String!,
            name: String!,
            height: String!,
            weight: String!, 
            type: [String!]
            ): Pokemon
    }
`;

module.exports = typeDefs;