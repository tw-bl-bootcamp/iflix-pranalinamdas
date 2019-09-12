let movieModel = require('../app/model/MovieModel')

class MovieService {
    constructor(){ }

    showMovieList(data, callback){

        movieModel.showMovieList(data, (error, result) => {
            if (error) {
                console.log('error in service', error)
                return callback(error)
            }

            console.log('result in service', result)
            return callback(null, result)
        })
    }
}

let service = new MovieService()
module.exports = service