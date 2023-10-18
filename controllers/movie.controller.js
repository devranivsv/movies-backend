//Import services
const { movieService } = require('../services');

//Controller: Save/Update Movie
const saveMovie = async (req, res) => {
    try {
        const requestData = req.body;

        //Save/update Movie
        const { data: movie } = await movieService.saveMovie(requestData);

        return res.status(200).send({
            hasError: false,
            data: movie,
        });
    } catch (error) {
        console.log('Error', error);

        return res.status(500).send({
            hasError: true,
            message: "Internal Server Error",
        });
    }
};

//Controller: Get Movie
const getMovie = async (req, res) => {
    try {
        const { id } = req.params;

        const { data: movie } = await movieService.getMovie(id);

        return res.status(200).send({
            hasError: false,
            data: movie,
        });
    } catch (error) {
        console.log('Error', error)

        return res.status(500).send({
            hasError: true,
            message: 'Internal Server Error',
        });
    }
};

//Controller: Get Movies
const getMovies = async (req, res) => {
    try {
        const { data: movies } = await movieService.getMovies();

        return res.status(200).send({
            hasError: false,
            data: movies,
        });
    } catch (error) {
        console.log('Error', error);

        return res.status(500).send({
            hasError: true,
            message: 'Internal Server Error',
        });
    }
};

//Controller: Delete Movie
const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;

        await movieService.deleteMovie(id);

        return res.status(200).send({
            hasError: false,
            message: 'Movie Deleted Successfully',
        });
    } catch (error) {
        console.log('Error', error);

        return res.status(500).send({
            hasError: true,
            message: 'Internal Server Error',
        });
    }
};

module.exports = {
    saveMovie,
    getMovie,
    getMovies,
    deleteMovie,
}