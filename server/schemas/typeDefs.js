const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        helloTeam: String
    }
`;

module.exports = typeDefs;