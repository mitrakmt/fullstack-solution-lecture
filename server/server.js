const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const router = require('./controllers')
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/', express.static(__dirname + '/client'))

app.use('/api', router)

app.listen(port)