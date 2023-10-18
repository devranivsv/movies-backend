//Import router
const router = require('express').Router();

//Import controllers
const { movieController } = require('../controllers');

//ROUTE: Save/Update Movie
router.post('/', movieController.saveMovie);

//ROUTE: Get Movie
router.get('/:id', movieController.getMovie);

//ROUTE: Get Movies
router.get('/', movieController.getMovies);

//ROUTE: Delete Movie
router.delete('/:id', movieController.deleteMovie);

module.exports = router;