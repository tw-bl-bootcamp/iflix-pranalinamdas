let loginModel = require('../app/model/LoginModel')

class UserService {
    constructor() { }

    login = (data, callback) => {

        loginModel.login(data, (error, result) => {
            if (error) {
                console.log("Errors in login service", error);
                return callback(error)
            }
            return callback(null, result)
        })
    }
}

let service = new UserService()
module.exports = service
