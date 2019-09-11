const chai = require('chai')
const expect = chai.expect
chai.should()
const app = require('../server')

describe('Server App', ()=>{
    it('should present in the server', ()=>{
        expect(app).to.be.a('function')
    })
})
