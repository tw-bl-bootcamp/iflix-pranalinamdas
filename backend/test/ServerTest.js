const chai = require('chai')
const expect = chai.expect
chai.should()
const app = require('../server')
const http = require('chai-http')
chai.use(http)

describe('Server App', ()=>{
    it('should present in the server', ()=>{
        expect(app).to.be.a('function')
    })

    it('should send response 200', (done)=>{
        chai.request(app).get('/')
        .then((res)=>{
            express(res).to.have.status(200)
        })
        done()
    })
})
