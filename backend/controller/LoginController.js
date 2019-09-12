let loginService = require('../service/LoginService')
exports.login = (req, res) => {

    req.checkBody('email', 'Email is not valid').isEmail()
    req.checkBody('password', 'password length should be minimum 8 characters').isLength({ min: 8 })

    let errors = req.validationErrors()

    if (errors) {
        let response = {
            'status': 422,
            'message': 'Errors in data validations',
            'data': errors
        }
        res.send(response)
    }

    let loginData = {
        'email': req.body.email,
        'password': req.body.password
    }

    loginService.login(loginData, (error, data) => {
        if (error) {
            let response = {
                'status': 404,
                'message': 'login data not correct',
                'data': error
            }
            res.send(response)
        }

        let response = {
            'status': 200,
            'message': 'login Successful',
            'data': data
        }
        res.send(response)
    })
}
