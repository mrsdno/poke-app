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
                    .populate('teams')

                return userData;
            }

            throw new AuthenticationError('Not Logged In');
        },

        // query the favorite teams for the LoggedIn User
        myFavTeams: async(parent, args, context) => {
            if(context.user){
              const teamData = await Team.find({"isFavorite": {"$in": ["true", true]}, username: context.user.username})
                .populate('pokemon')
              
              return teamData;
            }
            
            throw new AuthenticationError('Not Logged In');
        },

        // query all users
        users: async () => {
            return User.find()
                .select('-__v')
                .populate('teams')
        },

        // query a single user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v')
                .populate('teams')
        },

        // Queries Teams
        teams: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Team.find(params).sort({ createdAt: -1})
                .populate('pokemon')
        },

        // queries single Team by ID
        team: async (parent, { _id }) => {
            return Team.findOne({ _id })
                .populate('pokemon')
        },
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

        addTeam: async (parent, args, context) => {
            if(context.user) {
                const team = await Team.create({ ...args, username: context.user.username});

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { teams: team._id }},
                    { new: true }
                );

                return team;
            }

            // if user is not Logged in
            throw new AuthenticationError('You need to be logged in to create a team!');
        },

        // mutation for editing Team
        editTeam: async(parent, args, context) => {
            if(context.user) {
                const updatedTeam = await Team.findOneAndUpdate({ ...args, username: context.user.username});

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { teams: updatedTeam._id }},
                    { new: true }
                );

                return updatedTeam;
            }

            throw new AuthenticationError('You need to be logged in to update your team!');

        },
        
        deleteTeam: async(parent, args, context) => {
            if(context.user) {
                const unwantedTeam = await Team.findOneAndDelete({ ...args, username: context.user.username});

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { teams: unwantedTeam._id}},
                    { new: true }
                )

                return unwantedTeam;
            }
        },

        addPokemon: async (parent, { teamId, name, height, weight, type, image, description }, context) => {
            if(context.user) {

                const updatedTeam = await Team.findOneAndUpdate(
                    { _id: teamId },
                    { $push: {pokemon: { teamId, name, height, weight, type, image, description}}},
                    { new: true, runValidators: true}                    
                );

                return updatedTeam;
            }

            throw new AuthenticationError('You need to be logged in to add a pokemon');
        }
    }
};

module.exports = resolvers;