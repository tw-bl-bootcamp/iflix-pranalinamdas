const chai = require('chai')
const http = require('chai-http')
chai.use(http)
chai.should()
let login = require('../controller/LoginController')
const app = require('../server')

describe('Login User', () => {
    it('should return status 422 for empty input', (done) => {
        chai.request(app)
            .post('/login')
            .send({
                'email': '',
                'password': ''
            })
            .end((err, res) => {
                console.log(res);
                res.should.have.status(422)
            })
        done()
    })
})
