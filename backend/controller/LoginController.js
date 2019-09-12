let loginService = require('../service/LoginService')
exports.login = (request, response) => {

    request.checkBody('email', 'Email is not valid').isEmail()
    request.checkBody('password', 'password length should be minimum 8 characters').isLength({ min: 8 })

    let errors = request.validationErrors()

    if (errors) {
        let result = {
            'status': 422,
            'message': 'Errors in data validations',
            'data': errors
        }
        response.send(result)
    }

    let loginData = {
        'email': request.body.email,
        'password': request.body.password
    }

    loginService.login(loginData, (error, data) => {
        if (error) {
            let result = {
                'status': 404,
                'message': 'login data not correct',
                'data': error
            }
            response.send(result)
        }

        let result = {
            'status': 200,
            'message': 'login Successful',
            'data': data
        }
        response.send(result)
    })
}
