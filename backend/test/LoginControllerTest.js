const chai = require('chai')
const http = require('chai-http')
chai.use(http)
chai.should()
let login = require('../controller/LoginController')
const app = require('../server')

describe('Login User', () => {

    it('should return 200 for valid input', (done) => {
        chai.request(app)
            .post('/login')
            .send({
                'email': 'abcd@gmail.com',
                'password': 'abcd@1234'
            })
            .end((error, response) => {
                response.should.have.status(200)
            })
        done()
    })
})
