const { AuthenticationError } = require('apollo-server-express');
const { User, Pokemon, Team } = require('../models');

// used for JWT authentication
const { signToken } = require('../utils/auth');

const resolvers = {
    // queries go here
    Query: {
        // queries Logged in User
        me: async (parent, args, context) => {
            if(context.user){
                const userData = await User.findOne({ _id: context.user._id})
                    .select('-__v -password')
                    // .populate('pokeTeams')

                return userData;
            }

            throw new AuthenticationError('Not Logged In');
        },

        // query all users
        users: async () => {
            return User.find()
                .select('-__v')
                // .populate('pokeTeams')
        },

        // query a single user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v')
                // .populate('pokeTeams')
        }

    },

    // mutations go here
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};            
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user){
                throw new AuthenticationError('Incorrect Credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Incorrect Credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
    }
};

module.exports = resolvers;