const mongoose = require('mongoose');

let mongooseSchema = mongoose.Schema;
let venueSchema = mongooseSchema({
    "movieId":{
        "movieId" : String
    },
    "theaterName" : {
        type: String,
        required : [true, 'Theater name must be provided']
    },
    "address": {
        type: String,
        required: [true, 'address must be provided']
    },
    "timings": [{
        type: String,
        required: [true, 'show timings should be given']
    }],
    "TicketPrice" : {
        type:Number,
        required : [true, 'Ticket price must shown']
    }
})

let venue = mongoose.model('venue', venueSchema);

class VenueModel{
    constructor(){ }

    venueList = (data, callback) =>{
        venue.find({movieId: data.movieId},(err, result) =>{
            if(err){
                console.log("error in venue list model", err);
                return callback(err)
            }
            if(result.length != 0){
                console.log("result in venue model: ", result);
                return callback(null, result);
            }
        })
    }
}

let model = new VenueModel();
module.exports = model;
