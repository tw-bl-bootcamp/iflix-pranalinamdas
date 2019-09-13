const expresss = require('express');
const router = expresss.Router();
const controller = require('../controller/LoginController');
const movieController = require('../controller/MovieController');
const venueController = require('../controller/VenueController');

router.post('/login', controller.login);

router.get('/movieList', movieController.movieList);

router.get('/venueList', venueController.venueList);

module.exports = router;
