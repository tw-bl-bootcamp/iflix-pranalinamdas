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

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const dbConfig = require('./Config/dbConfig.js')

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to  database")
}).catch((error) => {
    console.log("Could not connect to database")
    process.exit()
})

mongoose.connection.on('error', function (err) {
    console.log("mongoose default connection has occured" + err + "error")
})

mongoose.connection.on('disconnected', function () {
    console.log(disconnected("mongoose default connection is disconnected"))
})