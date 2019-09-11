const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const dbConfig = require('./Config/dbConfig.js')

app.get('/', (req, res) => {
    res.send({ message: 'successfull' })
})

app.listen(process.env.portNumber, () => {
    console.log('server connected to port')
})

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to  database")
}).catch((error) => {
    console.log("Could not connect to database")
    process.exit()
})

module.exports = app
