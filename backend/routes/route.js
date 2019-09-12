const expresss = require('express')
const router = expresss.Router()
const controller = require('../controller/LoginController')
const movieController = require('../controller/MovieController')

router.post('/login', controller.login)

router.get('/movieList', movieController.movieList)


module.exports = router
