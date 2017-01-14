let GiphRouter = require('express').Router()
let GiphController = require('../controllers/giph.controller')

GiphRouter.Route('/giph')
    .get(GiphController.GET_GIPH)

module.exports = GiphRouter