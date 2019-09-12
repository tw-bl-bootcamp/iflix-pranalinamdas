const expresss = require('express')
const router = expresss.Router()
const controller = require('../controller/LoginController')

router.post('/login', controller.login)

module.exports = router
