let loginService = require('../service/LoginService')

exports.login = (req, res) => {

    req.checkBody('email', 'Email is not valid').isEmail()
    req.checkBody('password', 'password length should be minimum 8 characters').isLength({ min: 8 })

    let errors = req.validationErrors()

    if (errors) {
        console.log(errors);
        res.status(422).send(error)
    }
}
