let venueModel = require('../app/model/VenueModel')

class VenueService {
    constructor() { }

    venueList = (data, callback) => {

        venueModel.venueList(data, (err, result) => {
            if (err) {
                console.log("Error in venue list service", err);
                return callback(err);
            }
            return callback(null, result);
        })
    }
}

let service = new VenueService();
module.exports = service;
