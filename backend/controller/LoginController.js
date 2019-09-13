let loginService = require('../service/LoginService');;

exports.login = (request, response) => {

    request.checkBody('email', 'Email is not valid').isEmail()
    request.checkBody('password', 'password length should be minimum 8 characters').isLength({ min: 8 });

    let errors = request.validationErrors();

    console.log("errors in validation===>", errors);

    if (errors) {
        let result = {
            'status': 422,
            'message': 'Errors in data validations',
            'data': errors
        }
        response.send(result);
    }
    else {
        let loginData = {
            'email': request.body.email,
            'password': request.body.password
        }
        console.log("login data in controller=>>", loginData);

        loginService.login(loginData, (err, data) => {
            if (err) {
                let result = {
                    'status': 404,
                    'message': 'login data not correct',
                    'data': err
                }
                response.send(result);
            }
            let result = {
                'status': 200,
                'message': 'login Successful',
                'data': data
            }
            response.send(result);
        })
    }
}
