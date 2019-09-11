const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const expressValidator = require('express-validator')
app.use(expressValidator())

app.listen(3000, () => {
    console.log("Server connected to port 3000")
})

