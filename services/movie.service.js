//Import models
const { Movie } = require('../models');

//Function: Save/Update Movie
async function saveMovie(payload) {
    try {
        const movieID = payload?._id;
        delete payload?._id;

        if (!movieID) {
            const movie = new Movie(payload);
            await movie.save();

            return {
                hasError: false,
                data: movie,
            }
        }

        const movie = await Movie.findByIdAndUpdate(
            movieID,
            { $set: payload },
            { new: true }
        );

        return {
            hasError: false,
            data: movie,
        }
    } catch (error) {
        console.log('Error', error);

        return {
            hasError: true,
            message: error,
        }
    }
}

//Function: Get Movie
async function getMovie(id) {
    try {
        const movie = await Movie.findById(id);

        return {
            hasError: false,
            data: movie,
        };
    } catch (error) {
        console.log('Error', error);

        return {
            hasError: true,
            message: error,
        };
    }
}

//Function: Get Movies
async function getMovies() {
    try {
        const movies = await Movie.find();

        return {
            hasError: false,
            data: movies,
        };
    } catch (error) {
        console.log('Error', error);

        return {
            hasError: true,
            message: error,
        };
    }
}

//Function: Delete Movie
async function deleteMovie(id) {
    try {
        await Movie.findByIdAndDelete(id);

        return {
            hasError: false,
            data: null,
        };
    } catch (error) {
        console.log('Error', error);

        return {
            hasError: true,
            message: error,
        };
    }
}

module.exports = {
    saveMovie,
    getMovie,
    getMovies,
    deleteMovie,
}
