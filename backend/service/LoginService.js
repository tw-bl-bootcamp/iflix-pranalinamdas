let loginModel = require('../app/model/LoginModel');

class UserService {
    constructor() { }

    login = (data, callback) => {

        loginModel.login(data, (err, result) => {
            if (err) {
                console.log("Errors in login service", err);
                return callback(err);
            }            
            return callback(null, result);
        })
    }
}

let service = new UserService();
module.exports = service;
