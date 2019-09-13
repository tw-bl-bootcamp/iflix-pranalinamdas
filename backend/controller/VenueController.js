let venueService = require('../service/VenueService');

exports.venueList = (request, response) => {

    let movieData = {
        'movieId':request.body.movieId
    }
   console.log("movie data in controller==>",movieData);
   
    venueService.venueList(movieData, (err, data) => {
        if (err) {
            let result = {
                'status': 404,
                'message': 'error in showing movie list',
                'data': err
            }
            response.send(result);
        }
        else{
        let result = {
            'status': 200,
            'message': 'movie list shown successfully',
            'data': data
        }
        response.send(result);
    }
    })
}
