const express = require('express')
const app = express()

const expressValidator = require('express-validator')
app.use(expressValidator())



const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const router = require('./routes/route')
app.use(router)
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

app.listen(3000, () => {
    console.log('server connected to port '+3000)
})

app.get('/', () => {
}) 

module.exports = app
