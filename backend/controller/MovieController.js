let movieService = require('../service/MovieService');

exports.movieList = (request, response) => {

    let movieData = {
        'title': request.body.title,
        'language': request.body.language,
        'reviews': request.body.reviews,
        'ratings': request.body.ratings,
        'category': request.body.category
    }
   console.log("movie data in controller==>",movieData);
   
    movieService.showMovieList(movieData, (error, data) => {
        if (error) {
            let result = {
                'status': 404,
                'message': 'error in showing movie list',
                'data': error
            }
            response.send(result);
        }

        let result = {
            'status': 200,
            'message': 'movie list shown successfully',
            'data': data
        }
        response.send(result);
    })
}
