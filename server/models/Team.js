const { Schema, model } = require('mongoose');
const dateFormat  = require('../utils/dateFormat');

const pokemonSchema = require('./Pokemon');


const teamSchema = new Schema(
    {
        teamName: {
            type: String,
            required: 'Make sure to name your team!',
            minlength: 1,
            maxlength: 25
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },

        username: {
            type: String,
            required: true
        },

        pokemon: [
            pokemonSchema
        ],

        // This way the user can show off their favorite Teams
        isFavorite: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);


const Team = model('Team', teamSchema);
module.exports = Team;