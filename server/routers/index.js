let Router = require('express').Router()
let GiphRouter = require('./giph.router')

Router.use('/', GiphRouter)

module.exports = Router