const { Schema, model } = require('mongoose');

const pokemonSchema = new Schema (
    {
        teamId: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true,
        },

        height: {
            type: Number,
            required: true
        },

        weight: {
            type: Number,
            required: true
        },

        type: [
            {
                type: String,
                required: true
            }
        ],

        image: {
            type: String,
        },
        
        description: {
            type: String,
        }
    }
);

// Tried making Pokemon into a model, didn't work
// const Pokemon = model('Pokemon', pokemonSchema);
// module.exports = Pokemon;

module.exports = pokemonSchema;