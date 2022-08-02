const { AuthenticationError } = require('apollo-server-express');
const { User, Pokemon, Team } = require('../models');

// used for JWT authentication
const { signToken } = require('../utils/auth');

const resolvers = {
    // queries and mutations go here
    Query: {
        helloTeam: () => {
            return 'TEAM POKEMON!'
        }       
    }
};

module.exports = resolvers;