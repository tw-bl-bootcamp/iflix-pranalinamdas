const mongoose = require('mongoose')

let mongooseSchema = mongoose.Schema
let movieSchema = mongooseSchema({
    "title": {
        type: String,
        required: [true, 'movie name should be present']
    },
    "language": {
        type: String,
        required: [true, 'language should be specified']
    },
    'reviews': {
        type: String,
        required: [true, 'reviews should be mentioned']
    },
    'ratings': {
        type: Number,
        required: [true, 'movie ratings should given']
    },
    'category': {
        type: String,
        required: [true, 'category must be provided for movie']
    }
});

let movies = mongoose.model('movie', movieSchema)

class MovieModel {
    constructor() { }

    showMovieList(data, callback) {
        movies.find((error, result) => {
            if (error) {
                console.log("error in model", error);
                return callback(error)
            }

            if (result.length != 0) {
                console.log("result in model", result);
                return callback(null, result)
            }
        })
    }
}

let model = new MovieModel()
module.exports = model