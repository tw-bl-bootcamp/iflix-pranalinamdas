const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req, res) => {
    res.send({message:'successfull'})
})
module.exports = app