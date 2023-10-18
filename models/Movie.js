const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    country: String,
    moviesCount: Number
});

const actorModel = new mongoose.model('actors', actorSchema);

const MoviesSchema = new mongoose.Schema({
    name: String,
    universe: String,
    genre: String,
    year: Number,
    rating: Number,
    revenue: Number,
    poster: String,
    actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'actors' }]
}, {
    timestamps: true,
});

const Movie = mongoose.model('Movie', MoviesSchema, 'movies');

module.exports = {
    Movie
}