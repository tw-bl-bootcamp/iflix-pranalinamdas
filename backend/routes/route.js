module.export = (router) => {

    const controller = require('../controller/LoginController')
    
    router.post('/login', controller.login())
}