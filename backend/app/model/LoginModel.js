const mongoose = require('mongoose')

let mongooseSchema = mongoose.Schema
let loginSchema = mongooseSchema({
    "email": {
        type: String,
        required: [true, 'email can not be empty']
    },
    "password": {
        type: String,
        required: [true, 'password cannot be empty']
    }
});

let users = mongoose.model('user', loginSchema)

class UserModel {
    login = (body, callback) => {
        users.find({ email: body.email, password: body.password }, (err, result) => {
            if (err) {
                return callback(null);
            }
            if (result.length !== 0) {
                return callback(null, result);

            }
            console.log("invalid user");
            return callback(null, "invalid user");
        })
    }
}

let model = new UserModel()
module.exports = model
