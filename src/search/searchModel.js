const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    param: {
        repository: {
            type: String,
            required: true
        },
        language: {
            type: String,
            default: null
        },
        topic: {
            type: String,
            default: null
        }
    },
    result: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
});

const Search = new mongoose.model('Search', searchSchema);

module.exports = Search;
